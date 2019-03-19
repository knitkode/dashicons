import titleCase from 'title-case';
import glyphs from './glyphs.json';
import groupsNames from './groups.json';
// import codepoints from 'dashicons/codepoints.json'

import Menu from './svg/menu.svg';
import AdminSite from './svg/admin-site.svg';
import Dashboard from './svg/dashboard.svg';
import AdminMedia from './svg/admin-media.svg';
import AdminPage from './svg/admin-page.svg';
import AdminComments from './svg/admin-comments.svg';
import AdminAppearance from './svg/admin-appearance.svg';
import AdminPlugins from './svg/admin-plugins.svg';
import AdminUsers from './svg/admin-users.svg';
import AdminTools from './svg/admin-tools.svg';
import AdminSettings from './svg/admin-settings.svg';
import AdminNetwork from './svg/admin-network.svg';
import AdminGeneric from './svg/admin-generic.svg';
import AdminHome from './svg/admin-home.svg';
import AdminCollapse from './svg/admin-collapse.svg';
import Filter from './svg/filter.svg';
import AdminCustomizer from './svg/admin-customizer.svg';
import AdminMultisite from './svg/admin-multisite.svg';
import AdminLinks from './svg/admin-links.svg';
import AdminPost from './svg/admin-post.svg';
import FormatImage from './svg/format-image.svg';
import FormatGallery from './svg/format-gallery.svg';
import FormatAudio from './svg/format-audio.svg';
import FormatVideo from './svg/format-video.svg';
import FormatChat from './svg/format-chat.svg';
import FormatStatus from './svg/format-status.svg';
import FormatAside from './svg/format-aside.svg';
import FormatQuote from './svg/format-quote.svg';
import WelcomeWriteBlog from './svg/welcome-write-blog.svg';
import WelcomeAddPage from './svg/welcome-add-page.svg';
import WelcomeViewSite from './svg/welcome-view-site.svg';
import WelcomeWidgetsMenus from './svg/welcome-widgets-menus.svg';
import WelcomeComments from './svg/welcome-comments.svg';
import WelcomeLearnMore from './svg/welcome-learn-more.svg';
import ImageCrop from './svg/image-crop.svg';
import ImageRotate from './svg/image-rotate.svg';
import ImageRotateLeft from './svg/image-rotate-left.svg';
import ImageRotateRight from './svg/image-rotate-right.svg';
import ImageFlipVertical from './svg/image-flip-vertical.svg';
import ImageFlipHorizontal from './svg/image-flip-horizontal.svg';
import ImageFilter from './svg/image-filter.svg';
import Undo from './svg/undo.svg';
import Redo from './svg/redo.svg';
import EditorBold from './svg/editor-bold.svg';
import EditorItalic from './svg/editor-italic.svg';
import EditorUl from './svg/editor-ul.svg';
import EditorOl from './svg/editor-ol.svg';
import EditorQuote from './svg/editor-quote.svg';
import EditorAlignleft from './svg/editor-alignleft.svg';
import EditorAligncenter from './svg/editor-aligncenter.svg';
import EditorAlignright from './svg/editor-alignright.svg';
import EditorInsertmore from './svg/editor-insertmore.svg';
import EditorSpellcheck from './svg/editor-spellcheck.svg';
import EditorExpand from './svg/editor-expand.svg';
import EditorContract from './svg/editor-contract.svg';
import EditorKitchensink from './svg/editor-kitchensink.svg';
import EditorUnderline from './svg/editor-underline.svg';
import EditorJustify from './svg/editor-justify.svg';
import EditorTextcolor from './svg/editor-textcolor.svg';
import EditorPasteWord from './svg/editor-paste-word.svg';
import EditorPasteText from './svg/editor-paste-text.svg';
import EditorRemoveformatting from './svg/editor-removeformatting.svg';
import EditorVideo from './svg/editor-video.svg';
import EditorCustomchar from './svg/editor-customchar.svg';
import EditorOutdent from './svg/editor-outdent.svg';
import EditorIndent from './svg/editor-indent.svg';
import EditorHelp from './svg/editor-help.svg';
import EditorStrikethrough from './svg/editor-strikethrough.svg';
import EditorUnlink from './svg/editor-unlink.svg';
import EditorRtl from './svg/editor-rtl.svg';
import EditorBreak from './svg/editor-break.svg';
import EditorCode from './svg/editor-code.svg';
import EditorParagraph from './svg/editor-paragraph.svg';
import EditorTable from './svg/editor-table.svg';
import AlignLeft from './svg/align-left.svg';
import AlignRight from './svg/align-right.svg';
import AlignCenter from './svg/align-center.svg';
import AlignNone from './svg/align-none.svg';
import Lock from './svg/lock.svg';
import Unlock from './svg/unlock.svg';
import Calendar from './svg/calendar.svg';
import CalendarAlt from './svg/calendar-alt.svg';
import Visibility from './svg/visibility.svg';
import Hidden from './svg/hidden.svg';
import PostStatus from './svg/post-status.svg';
import Edit from './svg/edit.svg';
import Sticky from './svg/sticky.svg';
import External from './svg/external.svg';
import ArrowUp from './svg/arrow-up.svg';
import ArrowDown from './svg/arrow-down.svg';
import ArrowLeft from './svg/arrow-left.svg';
import ArrowRight from './svg/arrow-right.svg';
import ArrowUpAlt from './svg/arrow-up-alt.svg';
import ArrowDownAlt from './svg/arrow-down-alt.svg';
import ArrowLeftAlt from './svg/arrow-left-alt.svg';
import ArrowRightAlt from './svg/arrow-right-alt.svg';
import ArrowUpAlt2 from './svg/arrow-up-alt2.svg';
import ArrowDownAlt2 from './svg/arrow-down-alt2.svg';
import ArrowLeftAlt2 from './svg/arrow-left-alt2.svg';
import ArrowRightAlt2 from './svg/arrow-right-alt2.svg';
import Leftright from './svg/leftright.svg';
import Sort from './svg/sort.svg';
import Randomize from './svg/randomize.svg';
import ListView from './svg/list-view.svg';
import ExcerptView from './svg/excerpt-view.svg';
import GridView from './svg/grid-view.svg';
import Move from './svg/move.svg';
import Hammer from './svg/hammer.svg';
import Art from './svg/art.svg';
import Migrate from './svg/migrate.svg';
import Performance from './svg/performance.svg';
import UniversalAccess from './svg/universal-access.svg';
import UniversalAccessAlt from './svg/universal-access-alt.svg';
import Tickets from './svg/tickets.svg';
import Nametag from './svg/nametag.svg';
import Clipboard from './svg/clipboard.svg';
import Heart from './svg/heart.svg';
import Megaphone from './svg/megaphone.svg';
import Schedule from './svg/schedule.svg';
import Wordpress from './svg/wordpress.svg';
import WordpressAlt from './svg/wordpress-alt.svg';
import Pressthis from './svg/pressthis.svg';
import Update from './svg/update.svg';
import Screenoptions from './svg/screenoptions.svg';
import Cart from './svg/cart.svg';
import Feedback from './svg/feedback.svg';
import Cloud from './svg/cloud.svg';
import Translation from './svg/translation.svg';
import Tag from './svg/tag.svg';
import Category from './svg/category.svg';
import Archive from './svg/archive.svg';
import Tagcloud from './svg/tagcloud.svg';
import Text from './svg/text.svg';
import MediaArchive from './svg/media-archive.svg';
import MediaAudio from './svg/media-audio.svg';
import MediaCode from './svg/media-code.svg';
import MediaDefault from './svg/media-default.svg';
import MediaDocument from './svg/media-document.svg';
import MediaInteractive from './svg/media-interactive.svg';
import MediaSpreadsheet from './svg/media-spreadsheet.svg';
import MediaText from './svg/media-text.svg';
import MediaVideo from './svg/media-video.svg';
import PlaylistAudio from './svg/playlist-audio.svg';
import PlaylistVideo from './svg/playlist-video.svg';
import ControlsPlay from './svg/controls-play.svg';
import ControlsPause from './svg/controls-pause.svg';
import ControlsForward from './svg/controls-forward.svg';
import ControlsSkipforward from './svg/controls-skipforward.svg';
import ControlsBack from './svg/controls-back.svg';
import ControlsSkipback from './svg/controls-skipback.svg';
import ControlsRepeat from './svg/controls-repeat.svg';
import ControlsVolumeon from './svg/controls-volumeon.svg';
import ControlsVolumeoff from './svg/controls-volumeoff.svg';
import Yes from './svg/yes.svg';
import No from './svg/no.svg';
import NoAlt from './svg/no-alt.svg';
import Plus from './svg/plus.svg';
import PlusAlt from './svg/plus-alt.svg';
import Minus from './svg/minus.svg';
import Dismiss from './svg/dismiss.svg';
import Marker from './svg/marker.svg';
import StarFilled from './svg/star-filled.svg';
import StarHalf from './svg/star-half.svg';
import StarEmpty from './svg/star-empty.svg';
import Flag from './svg/flag.svg';
import Info from './svg/info.svg';
import Warning from './svg/warning.svg';
import Share from './svg/share.svg';
import ShareAlt from './svg/share-alt.svg';
import ShareAlt2 from './svg/share-alt2.svg';
import Twitter from './svg/twitter.svg';
import Rss from './svg/rss.svg';
import Email from './svg/email.svg';
import EmailAlt from './svg/email-alt.svg';
import Facebook from './svg/facebook.svg';
import FacebookAlt from './svg/facebook-alt.svg';
import Networking from './svg/networking.svg';
import Googleplus from './svg/googleplus.svg';
import Location from './svg/location.svg';
import LocationAlt from './svg/location-alt.svg';
import Camera from './svg/camera.svg';
import ImagesAlt from './svg/images-alt.svg';
import ImagesAlt2 from './svg/images-alt2.svg';
import VideoAlt from './svg/video-alt.svg';
import VideoAlt2 from './svg/video-alt2.svg';
import VideoAlt3 from './svg/video-alt3.svg';
import Vault from './svg/vault.svg';
import Shield from './svg/shield.svg';
import ShieldAlt from './svg/shield-alt.svg';
import Sos from './svg/sos.svg';
import Search from './svg/search.svg';
import Slides from './svg/slides.svg';
import Analytics from './svg/analytics.svg';
import ChartPie from './svg/chart-pie.svg';
import ChartBar from './svg/chart-bar.svg';
import ChartLine from './svg/chart-line.svg';
import ChartArea from './svg/chart-area.svg';
import Groups from './svg/groups.svg';
import Businessman from './svg/businessman.svg';
import ID from './svg/id.svg';
import IDAlt from './svg/id-alt.svg';
import Products from './svg/products.svg';
import Awards from './svg/awards.svg';
import Forms from './svg/forms.svg';
import Testimonial from './svg/testimonial.svg';
import Portfolio from './svg/portfolio.svg';
import Book from './svg/book.svg';
import BookAlt from './svg/book-alt.svg';
import Download from './svg/download.svg';
import Upload from './svg/upload.svg';
import Backup from './svg/backup.svg';
import Clock from './svg/clock.svg';
import Lightbulb from './svg/lightbulb.svg';
import Microphone from './svg/microphone.svg';
import Desktop from './svg/desktop.svg';
import Laptop from './svg/laptop.svg';
import Tablet from './svg/tablet.svg';
import Smartphone from './svg/smartphone.svg';
import Phone from './svg/phone.svg';
import Smiley from './svg/smiley.svg';
import IndexCard from './svg/index-card.svg';
import Carrot from './svg/carrot.svg';
import Building from './svg/building.svg';
import Store from './svg/store.svg';
import Album from './svg/album.svg';
import Palmtree from './svg/palmtree.svg';
import TicketsAlt from './svg/tickets-alt.svg';
import Money from './svg/money.svg';
import ThumbsUp from './svg/thumbs-up.svg';
import ThumbsDown from './svg/thumbs-down.svg';
import Layout from './svg/layout.svg';
import Paperclip from './svg/paperclip.svg';
import EmailAlt2 from './svg/email-alt2.svg';
import MenuAlt from './svg/menu-alt.svg';
import PlusLight from './svg/plus-light.svg';
import Trash from './svg/trash.svg';
import Heading from './svg/gutenberg/heading.svg';
import Insert from './svg/gutenberg/insert.svg';
import Saved from './svg/gutenberg/saved.svg';
import AlignFullWidth from './svg/gutenberg/align-full-width.svg';
import Button from './svg/gutenberg/button.svg';
import AlignWide from './svg/gutenberg/align-wide.svg';
import Ellipsis from './svg/gutenberg/ellipsis.svg';
import BuddiconsActivity from './svg/buddicons-activity.svg';
import BuddiconsBuddypressLogo from './svg/buddicons-buddypress-logo.svg';
import BuddiconsCommunity from './svg/buddicons-community.svg';
import BuddiconsForums from './svg/buddicons-forums.svg';
import BuddiconsFriends from './svg/buddicons-friends.svg';
import BuddiconsGroups from './svg/buddicons-groups.svg';
import BuddiconsPm from './svg/buddicons-pm.svg';
import BuddiconsReplies from './svg/buddicons-replies.svg';
import BuddiconsTopics from './svg/buddicons-topics.svg';
import BuddiconsTracking from './svg/buddicons-tracking.svg';
import AdminSiteAlt from './svg/admin-site-alt.svg';
import AdminSiteAlt2 from './svg/admin-site-alt2.svg';
import AdminSiteAlt3 from './svg/admin-site-alt3.svg';
import HTML from './svg/gutenberg/html.svg';
import RestApi from './svg/rest-api.svg';
import EditorLtr from './svg/editor-ltr.svg';
import YesAlt from './svg/yes-alt.svg';
import BuddiconsBbpressLogo from './svg/buddicons-bbpress-logo.svg';
import Tide from './svg/tide.svg';

let mapSvg = {};
mapSvg['menu'] = Menu;
mapSvg['admin-site'] = AdminSite;
mapSvg['dashboard'] = Dashboard;
mapSvg['admin-media'] = AdminMedia;
mapSvg['admin-page'] = AdminPage;
mapSvg['admin-comments'] = AdminComments;
mapSvg['admin-appearance'] = AdminAppearance;
mapSvg['admin-plugins'] = AdminPlugins;
mapSvg['admin-users'] = AdminUsers;
mapSvg['admin-tools'] = AdminTools;
mapSvg['admin-settings'] = AdminSettings;
mapSvg['admin-network'] = AdminNetwork;
mapSvg['admin-generic'] = AdminGeneric;
mapSvg['admin-home'] = AdminHome;
mapSvg['admin-collapse'] = AdminCollapse;
mapSvg['filter'] = Filter;
mapSvg['admin-customizer'] = AdminCustomizer;
mapSvg['admin-multisite'] = AdminMultisite;
mapSvg['admin-links'] = AdminLinks;
mapSvg['admin-post'] = AdminPost;
mapSvg['format-image'] = FormatImage;
mapSvg['format-gallery'] = FormatGallery;
mapSvg['format-audio'] = FormatAudio;
mapSvg['format-video'] = FormatVideo;
mapSvg['format-chat'] = FormatChat;
mapSvg['format-status'] = FormatStatus;
mapSvg['format-aside'] = FormatAside;
mapSvg['format-quote'] = FormatQuote;
mapSvg['welcome-write-blog'] = WelcomeWriteBlog;
mapSvg['welcome-add-page'] = WelcomeAddPage;
mapSvg['welcome-view-site'] = WelcomeViewSite;
mapSvg['welcome-widgets-menus'] = WelcomeWidgetsMenus;
mapSvg['welcome-comments'] = WelcomeComments;
mapSvg['welcome-learn-more'] = WelcomeLearnMore;
mapSvg['image-crop'] = ImageCrop;
mapSvg['image-rotate'] = ImageRotate;
mapSvg['image-rotate-left'] = ImageRotateLeft;
mapSvg['image-rotate-right'] = ImageRotateRight;
mapSvg['image-flip-vertical'] = ImageFlipVertical;
mapSvg['image-flip-horizontal'] = ImageFlipHorizontal;
mapSvg['image-filter'] = ImageFilter;
mapSvg['undo'] = Undo;
mapSvg['redo'] = Redo;
mapSvg['editor-bold'] = EditorBold;
mapSvg['editor-italic'] = EditorItalic;
mapSvg['editor-ul'] = EditorUl;
mapSvg['editor-ol'] = EditorOl;
mapSvg['editor-quote'] = EditorQuote;
mapSvg['editor-alignleft'] = EditorAlignleft;
mapSvg['editor-aligncenter'] = EditorAligncenter;
mapSvg['editor-alignright'] = EditorAlignright;
mapSvg['editor-insertmore'] = EditorInsertmore;
mapSvg['editor-spellcheck'] = EditorSpellcheck;
mapSvg['editor-expand'] = EditorExpand;
mapSvg['editor-contract'] = EditorContract;
mapSvg['editor-kitchensink'] = EditorKitchensink;
mapSvg['editor-underline'] = EditorUnderline;
mapSvg['editor-justify'] = EditorJustify;
mapSvg['editor-textcolor'] = EditorTextcolor;
mapSvg['editor-paste-word'] = EditorPasteWord;
mapSvg['editor-paste-text'] = EditorPasteText;
mapSvg['editor-removeformatting'] = EditorRemoveformatting;
mapSvg['editor-video'] = EditorVideo;
mapSvg['editor-customchar'] = EditorCustomchar;
mapSvg['editor-outdent'] = EditorOutdent;
mapSvg['editor-indent'] = EditorIndent;
mapSvg['editor-help'] = EditorHelp;
mapSvg['editor-strikethrough'] = EditorStrikethrough;
mapSvg['editor-unlink'] = EditorUnlink;
mapSvg['editor-rtl'] = EditorRtl;
mapSvg['editor-break'] = EditorBreak;
mapSvg['editor-code'] = EditorCode;
mapSvg['editor-paragraph'] = EditorParagraph;
mapSvg['editor-table'] = EditorTable;
mapSvg['align-left'] = AlignLeft;
mapSvg['align-right'] = AlignRight;
mapSvg['align-center'] = AlignCenter;
mapSvg['align-none'] = AlignNone;
mapSvg['lock'] = Lock;
mapSvg['unlock'] = Unlock;
mapSvg['calendar'] = Calendar;
mapSvg['calendar-alt'] = CalendarAlt;
mapSvg['visibility'] = Visibility;
mapSvg['hidden'] = Hidden;
mapSvg['post-status'] = PostStatus;
mapSvg['edit'] = Edit;
mapSvg['sticky'] = Sticky;
mapSvg['external'] = External;
mapSvg['arrow-up'] = ArrowUp;
mapSvg['arrow-down'] = ArrowDown;
mapSvg['arrow-left'] = ArrowLeft;
mapSvg['arrow-right'] = ArrowRight;
mapSvg['arrow-up-alt'] = ArrowUpAlt;
mapSvg['arrow-down-alt'] = ArrowDownAlt;
mapSvg['arrow-left-alt'] = ArrowLeftAlt;
mapSvg['arrow-right-alt'] = ArrowRightAlt;
mapSvg['arrow-up-alt2'] = ArrowUpAlt2;
mapSvg['arrow-down-alt2'] = ArrowDownAlt2;
mapSvg['arrow-left-alt2'] = ArrowLeftAlt2;
mapSvg['arrow-right-alt2'] = ArrowRightAlt2;
mapSvg['leftright'] = Leftright;
mapSvg['sort'] = Sort;
mapSvg['randomize'] = Randomize;
mapSvg['list-view'] = ListView;
mapSvg['excerpt-view'] = ExcerptView;
mapSvg['grid-view'] = GridView;
mapSvg['move'] = Move;
mapSvg['hammer'] = Hammer;
mapSvg['art'] = Art;
mapSvg['migrate'] = Migrate;
mapSvg['performance'] = Performance;
mapSvg['universal-access'] = UniversalAccess;
mapSvg['universal-access-alt'] = UniversalAccessAlt;
mapSvg['tickets'] = Tickets;
mapSvg['nametag'] = Nametag;
mapSvg['clipboard'] = Clipboard;
mapSvg['heart'] = Heart;
mapSvg['megaphone'] = Megaphone;
mapSvg['schedule'] = Schedule;
mapSvg['wordpress'] = Wordpress;
mapSvg['wordpress-alt'] = WordpressAlt;
mapSvg['pressthis'] = Pressthis;
mapSvg['update'] = Update;
mapSvg['screenoptions'] = Screenoptions;
mapSvg['cart'] = Cart;
mapSvg['feedback'] = Feedback;
mapSvg['cloud'] = Cloud;
mapSvg['translation'] = Translation;
mapSvg['tag'] = Tag;
mapSvg['category'] = Category;
mapSvg['archive'] = Archive;
mapSvg['tagcloud'] = Tagcloud;
mapSvg['text'] = Text;
mapSvg['media-archive'] = MediaArchive;
mapSvg['media-audio'] = MediaAudio;
mapSvg['media-code'] = MediaCode;
mapSvg['media-default'] = MediaDefault;
mapSvg['media-document'] = MediaDocument;
mapSvg['media-interactive'] = MediaInteractive;
mapSvg['media-spreadsheet'] = MediaSpreadsheet;
mapSvg['media-text'] = MediaText;
mapSvg['media-video'] = MediaVideo;
mapSvg['playlist-audio'] = PlaylistAudio;
mapSvg['playlist-video'] = PlaylistVideo;
mapSvg['controls-play'] = ControlsPlay;
mapSvg['controls-pause'] = ControlsPause;
mapSvg['controls-forward'] = ControlsForward;
mapSvg['controls-skipforward'] = ControlsSkipforward;
mapSvg['controls-back'] = ControlsBack;
mapSvg['controls-skipback'] = ControlsSkipback;
mapSvg['controls-repeat'] = ControlsRepeat;
mapSvg['controls-volumeon'] = ControlsVolumeon;
mapSvg['controls-volumeoff'] = ControlsVolumeoff;
mapSvg['yes'] = Yes;
mapSvg['no'] = No;
mapSvg['no-alt'] = NoAlt;
mapSvg['plus'] = Plus;
mapSvg['plus-alt'] = PlusAlt;
mapSvg['minus'] = Minus;
mapSvg['dismiss'] = Dismiss;
mapSvg['marker'] = Marker;
mapSvg['star-filled'] = StarFilled;
mapSvg['star-half'] = StarHalf;
mapSvg['star-empty'] = StarEmpty;
mapSvg['flag'] = Flag;
mapSvg['info'] = Info;
mapSvg['warning'] = Warning;
mapSvg['share'] = Share;
mapSvg['share-alt'] = ShareAlt;
mapSvg['share-alt2'] = ShareAlt2;
mapSvg['twitter'] = Twitter;
mapSvg['rss'] = Rss;
mapSvg['email'] = Email;
mapSvg['email-alt'] = EmailAlt;
mapSvg['facebook'] = Facebook;
mapSvg['facebook-alt'] = FacebookAlt;
mapSvg['networking'] = Networking;
mapSvg['googleplus'] = Googleplus;
mapSvg['location'] = Location;
mapSvg['location-alt'] = LocationAlt;
mapSvg['camera'] = Camera;
mapSvg['images-alt'] = ImagesAlt;
mapSvg['images-alt2'] = ImagesAlt2;
mapSvg['video-alt'] = VideoAlt;
mapSvg['video-alt2'] = VideoAlt2;
mapSvg['video-alt3'] = VideoAlt3;
mapSvg['vault'] = Vault;
mapSvg['shield'] = Shield;
mapSvg['shield-alt'] = ShieldAlt;
mapSvg['sos'] = Sos;
mapSvg['search'] = Search;
mapSvg['slides'] = Slides;
mapSvg['analytics'] = Analytics;
mapSvg['chart-pie'] = ChartPie;
mapSvg['chart-bar'] = ChartBar;
mapSvg['chart-line'] = ChartLine;
mapSvg['chart-area'] = ChartArea;
mapSvg['groups'] = Groups;
mapSvg['businessman'] = Businessman;
mapSvg['id'] = ID;
mapSvg['id-alt'] = IDAlt;
mapSvg['products'] = Products;
mapSvg['awards'] = Awards;
mapSvg['forms'] = Forms;
mapSvg['testimonial'] = Testimonial;
mapSvg['portfolio'] = Portfolio;
mapSvg['book'] = Book;
mapSvg['book-alt'] = BookAlt;
mapSvg['download'] = Download;
mapSvg['upload'] = Upload;
mapSvg['backup'] = Backup;
mapSvg['clock'] = Clock;
mapSvg['lightbulb'] = Lightbulb;
mapSvg['microphone'] = Microphone;
mapSvg['desktop'] = Desktop;
mapSvg['laptop'] = Laptop;
mapSvg['tablet'] = Tablet;
mapSvg['smartphone'] = Smartphone;
mapSvg['phone'] = Phone;
mapSvg['smiley'] = Smiley;
mapSvg['index-card'] = IndexCard;
mapSvg['carrot'] = Carrot;
mapSvg['building'] = Building;
mapSvg['store'] = Store;
mapSvg['album'] = Album;
mapSvg['palmtree'] = Palmtree;
mapSvg['tickets-alt'] = TicketsAlt;
mapSvg['money'] = Money;
mapSvg['thumbs-up'] = ThumbsUp;
mapSvg['thumbs-down'] = ThumbsDown;
mapSvg['layout'] = Layout;
mapSvg['paperclip'] = Paperclip;
mapSvg['email-alt2'] = EmailAlt2;
mapSvg['menu-alt'] = MenuAlt;
mapSvg['plus-light'] = PlusLight;
mapSvg['trash'] = Trash;
mapSvg['heading'] = Heading;
mapSvg['insert'] = Insert;
mapSvg['saved'] = Saved;
mapSvg['align-full-width'] = AlignFullWidth;
mapSvg['button'] = Button;
mapSvg['align-wide'] = AlignWide;
mapSvg['ellipsis'] = Ellipsis;
mapSvg['buddicons-activity'] = BuddiconsActivity;
mapSvg['buddicons-buddypress-logo'] = BuddiconsBuddypressLogo;
mapSvg['buddicons-community'] = BuddiconsCommunity;
mapSvg['buddicons-forums'] = BuddiconsForums;
mapSvg['buddicons-friends'] = BuddiconsFriends;
mapSvg['buddicons-groups'] = BuddiconsGroups;
mapSvg['buddicons-pm'] = BuddiconsPm;
mapSvg['buddicons-replies'] = BuddiconsReplies;
mapSvg['buddicons-topics'] = BuddiconsTopics;
mapSvg['buddicons-tracking'] = BuddiconsTracking;
mapSvg['admin-site-alt'] = AdminSiteAlt;
mapSvg['admin-site-alt2'] = AdminSiteAlt2;
mapSvg['admin-site-alt3'] = AdminSiteAlt3;
mapSvg['html'] = HTML;
mapSvg['rest-api'] = RestApi;
mapSvg['editor-ltr'] = EditorLtr;
mapSvg['yes-alt'] = YesAlt;
mapSvg['buddicons-bbpress-logo'] = BuddiconsBbpressLogo;
mapSvg['tide'] = Tide;

/**
 * Dashicons
 * @see https://developer.wordpress.org/resource/dashicons/
 *
 * - Dashicons glyphs
 * Scraped from https://s.w.org/wp-includes/css/dashicons.css
 * @see the python script at https://git.io/vNnCZ#L70
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
      icons: []
    };
    mapByGroups[groupName] = [];

    for (let i = 0; i < group.length; i++) {
      let name = group[i];
      // let codepoint = codepoints[name];
      let glyph = glyphs[name];
      let label = titleCase(name);
      let svg = mapSvg[name];

      // this is the icon object model
      let icon = {
        name,
        glyph,
        // codepoint,
        label,
        svg
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
export { list };

/**
 * @type {Array}
 */
export { listByGroups };

/**
 * @type {Object}
 */
export { map };

/**
 * @type {Object}
 */
export { mapByName };

/**
 * @type {Object}
 */
export { mapByGlyph };

/**
 * @type {Object}
 */
export { mapByGroups };

/**
 * @type {Object}
 */
export default {
  list,
  listByGroups,
  map,
  mapByName,
  mapByGlyph,
  mapByGroups
};
