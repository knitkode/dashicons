import titleCase from 'title-case';
import glyphs from './glyphs.json';
import groupsNames from './groups.json'
// import codepoints from 'dashicons/codepoints.json';

/**
 * Dashicons
 * @see https://developer.wordpress.org/resource/dashicons/
 *
 * - Dashicons glyphs
 * Scraped from https://s.w.org/wp-includes/css/dashicons.css
 * @see the python script at https://git.io/vNnCZ#L70
 *
 *
 * - Dashicons groups
 * @see https://developer.wordpress.org/resource/dashicons/#id-alt
 *
 */
let list = [];
let listByGroups = [];
let map = {};
let mapByName = {};
let mapByGlyph = {};
let mapByGroups = {};

// create the various maps and lists in one loop
for (let groupName in groupsNames) {
  if (groupsNames.hasOwnProperty(groupName)) {
    let group = groupsNames[groupName];

    let mapGroup = {
      name: groupName,
      icons: [],
    };
    mapByGroups[groupName] = [];


    for (let i = 0; i < group.length; i++) {
      let name = group[i];
      // let codepoint = codepoints[name];
      let glyph = glyphs[name];
      let label = titleCase(name);
      let svg = require(`dashicons/svg-min/${name}.svg`);
      let svgHtml = `<svg xmlns="${svg.attributes.xmlns}" viewBox="${svg.attributes.viewBox}">${svg.content}</svg>`;

      // this is the icon object model
      let icon = {
        name,
        glyph,
        // codepoint,
        label,
        svg,
        svgHtml,
      };

      list.push(icon);
      mapByName[name] = icon;
      mapByGlyph[glyph] = icon;
      mapByGroups[groupName].push(icon);
      mapGroup.icons.push(icon);
    }

    listByGroups.push(mapGroup);
  }
}

// alias a default map using names as keys
map = mapByName;

/**
 * @type {Array}
 */
export {list};

/**
 * @type {Array}
 */
export {listByGroups};

/**
 * @type {Object}
 */
export {map};

/**
 * @type {Object}
 */
export {mapByName};

/**
 * @type {Object}
 */
export {mapByGlyph};

/**
 * @type {Object}
 */
export {mapByGroups};

/**
 * Angular transform to render the svg as html with `ng-bind-html`
 * @param  {Array|Object} target
 * @param  {Object}       $sce
 * @return {Array|Object}
 */
export function ngTransform (target, $sce) {
  if (target.length) {
    for (let i = target.length - 1; i >= 0; i--) {
      let svgHtml = target[i].svgHtml;
      // this checks because the value might ahve been already trusted, and therefore
      // it would not be a string anymore but an object... same below.
      if (typeof svgHtml === 'string') {
        target[i].svgHtml = $sce.trustAsHtml(svgHtml)
      }
    }
  } else {
    for (let key in target) {
      let svgHtml = target[key].svgHtml;
      // ... same as above
      if (typeof svgHtml === 'string') {
        target[key].svgHtml = $sce.trustAsHtml(svgHtml);
      }
    }
  }
  return target;
}

/**
 * @type {Object}
 */
export default {
  list,
  listByGroups,
  map,
  mapByName,
  mapByGlyph,
  mapByGroups,
};
