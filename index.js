import titleCase from 'title-case';
import glyphs from './glyphs.json';
import groupsNames from './groups.json';
// import codepoints from 'dashicons/codepoints.json'

import { ReactComponent as Menu } from 'dashicons/svg-min/menu.svg';
import { ReactComponent as AdminSite } from 'dashicons/svg-min/admin-site.svg';
import { ReactComponent as Dashboard } from 'dashicons/svg-min/dashboard.svg';
import { ReactComponent as AdminMedia } from 'dashicons/svg-min/admin-media.svg';
import { ReactComponent as AdminPage } from 'dashicons/svg-min/admin-page.svg';
import { ReactComponent as AdminComments } from 'dashicons/svg-min/admin-comments.svg';
import { ReactComponent as AdminAppearance } from 'dashicons/svg-min/admin-appearance.svg';
import { ReactComponent as AdminPlugins } from 'dashicons/svg-min/admin-plugins.svg';
import { ReactComponent as AdminUsers } from 'dashicons/svg-min/admin-users.svg';
import { ReactComponent as AdminTools } from 'dashicons/svg-min/admin-tools.svg';
import { ReactComponent as AdminSettings } from 'dashicons/svg-min/admin-settings.svg';
import { ReactComponent as AdminNetwork } from 'dashicons/svg-min/admin-network.svg';
import { ReactComponent as AdminGeneric } from 'dashicons/svg-min/admin-generic.svg';
import { ReactComponent as AdminHome } from 'dashicons/svg-min/admin-home.svg';
import { ReactComponent as AdminCollapse } from 'dashicons/svg-min/admin-collapse.svg';
import { ReactComponent as Filter } from 'dashicons/svg-min/filter.svg';
import { ReactComponent as AdminCustomizer } from 'dashicons/svg-min/admin-customizer.svg';
import { ReactComponent as AdminMultisite } from 'dashicons/svg-min/admin-multisite.svg';
import { ReactComponent as AdminLinks } from 'dashicons/svg-min/admin-links.svg';
import { ReactComponent as AdminPost } from 'dashicons/svg-min/admin-post.svg';
import { ReactComponent as FormatImage } from 'dashicons/svg-min/format-image.svg';
import { ReactComponent as FormatGallery } from 'dashicons/svg-min/format-gallery.svg';
import { ReactComponent as FormatAudio } from 'dashicons/svg-min/format-audio.svg';
import { ReactComponent as FormatVideo } from 'dashicons/svg-min/format-video.svg';
import { ReactComponent as FormatChat } from 'dashicons/svg-min/format-chat.svg';
import { ReactComponent as FormatStatus } from 'dashicons/svg-min/format-status.svg';
import { ReactComponent as FormatAside } from 'dashicons/svg-min/format-aside.svg';
import { ReactComponent as FormatQuote } from 'dashicons/svg-min/format-quote.svg';
import { ReactComponent as WelcomeWriteBlog } from 'dashicons/svg-min/welcome-write-blog.svg';
import { ReactComponent as WelcomeAddPage } from 'dashicons/svg-min/welcome-add-page.svg';
import { ReactComponent as WelcomeViewSite } from 'dashicons/svg-min/welcome-view-site.svg';
import { ReactComponent as WelcomeWidgetsMenus } from 'dashicons/svg-min/welcome-widgets-menus.svg';
import { ReactComponent as WelcomeComments } from 'dashicons/svg-min/welcome-comments.svg';
import { ReactComponent as WelcomeLearnMore } from 'dashicons/svg-min/welcome-learn-more.svg';
import { ReactComponent as ImageCrop } from 'dashicons/svg-min/image-crop.svg';
import { ReactComponent as ImageRotate } from 'dashicons/svg-min/image-rotate.svg';
import { ReactComponent as ImageRotateLeft } from 'dashicons/svg-min/image-rotate-left.svg';
import { ReactComponent as ImageRotateRight } from 'dashicons/svg-min/image-rotate-right.svg';
import { ReactComponent as ImageFlipVertical } from 'dashicons/svg-min/image-flip-vertical.svg';
import { ReactComponent as ImageFlipHorizontal } from 'dashicons/svg-min/image-flip-horizontal.svg';
import { ReactComponent as ImageFilter } from 'dashicons/svg-min/image-filter.svg';
import { ReactComponent as Undo } from 'dashicons/svg-min/undo.svg';
import { ReactComponent as Redo } from 'dashicons/svg-min/redo.svg';
import { ReactComponent as EditorBold } from 'dashicons/svg-min/editor-bold.svg';
import { ReactComponent as EditorItalic } from 'dashicons/svg-min/editor-italic.svg';
import { ReactComponent as EditorUl } from 'dashicons/svg-min/editor-ul.svg';
import { ReactComponent as EditorOl } from 'dashicons/svg-min/editor-ol.svg';
import { ReactComponent as EditorQuote } from 'dashicons/svg-min/editor-quote.svg';
import { ReactComponent as EditorAlignleft } from 'dashicons/svg-min/editor-alignleft.svg';
import { ReactComponent as EditorAligncenter } from 'dashicons/svg-min/editor-aligncenter.svg';
import { ReactComponent as EditorAlignright } from 'dashicons/svg-min/editor-alignright.svg';
import { ReactComponent as EditorInsertmore } from 'dashicons/svg-min/editor-insertmore.svg';
import { ReactComponent as EditorSpellcheck } from 'dashicons/svg-min/editor-spellcheck.svg';
import { ReactComponent as EditorExpand } from 'dashicons/svg-min/editor-expand.svg';
import { ReactComponent as EditorContract } from 'dashicons/svg-min/editor-contract.svg';
import { ReactComponent as EditorKitchensink } from 'dashicons/svg-min/editor-kitchensink.svg';
import { ReactComponent as EditorUnderline } from 'dashicons/svg-min/editor-underline.svg';
import { ReactComponent as EditorJustify } from 'dashicons/svg-min/editor-justify.svg';
import { ReactComponent as EditorTextcolor } from 'dashicons/svg-min/editor-textcolor.svg';
import { ReactComponent as EditorPasteWord } from 'dashicons/svg-min/editor-paste-word.svg';
import { ReactComponent as EditorPasteText } from 'dashicons/svg-min/editor-paste-text.svg';
import { ReactComponent as EditorRemoveformatting } from 'dashicons/svg-min/editor-removeformatting.svg';
import { ReactComponent as EditorVideo } from 'dashicons/svg-min/editor-video.svg';
import { ReactComponent as EditorCustomchar } from 'dashicons/svg-min/editor-customchar.svg';
import { ReactComponent as EditorOutdent } from 'dashicons/svg-min/editor-outdent.svg';
import { ReactComponent as EditorIndent } from 'dashicons/svg-min/editor-indent.svg';
import { ReactComponent as EditorHelp } from 'dashicons/svg-min/editor-help.svg';
import { ReactComponent as EditorStrikethrough } from 'dashicons/svg-min/editor-strikethrough.svg';
import { ReactComponent as EditorUnlink } from 'dashicons/svg-min/editor-unlink.svg';
import { ReactComponent as EditorRtl } from 'dashicons/svg-min/editor-rtl.svg';
import { ReactComponent as EditorBreak } from 'dashicons/svg-min/editor-break.svg';
import { ReactComponent as EditorCode } from 'dashicons/svg-min/editor-code.svg';
import { ReactComponent as EditorParagraph } from 'dashicons/svg-min/editor-paragraph.svg';
import { ReactComponent as EditorTable } from 'dashicons/svg-min/editor-table.svg';
import { ReactComponent as AlignLeft } from 'dashicons/svg-min/align-left.svg';
import { ReactComponent as AlignRight } from 'dashicons/svg-min/align-right.svg';
import { ReactComponent as AlignCenter } from 'dashicons/svg-min/align-center.svg';
import { ReactComponent as AlignNone } from 'dashicons/svg-min/align-none.svg';
import { ReactComponent as Lock } from 'dashicons/svg-min/lock.svg';
import { ReactComponent as Unlock } from 'dashicons/svg-min/unlock.svg';
import { ReactComponent as Calendar } from 'dashicons/svg-min/calendar.svg';
import { ReactComponent as CalendarAlt } from 'dashicons/svg-min/calendar-alt.svg';
import { ReactComponent as Visibility } from 'dashicons/svg-min/visibility.svg';
import { ReactComponent as Hidden } from 'dashicons/svg-min/hidden.svg';
import { ReactComponent as PostStatus } from 'dashicons/svg-min/post-status.svg';
import { ReactComponent as Edit } from 'dashicons/svg-min/edit.svg';
import { ReactComponent as Sticky } from 'dashicons/svg-min/sticky.svg';
import { ReactComponent as External } from 'dashicons/svg-min/external.svg';
import { ReactComponent as ArrowUp } from 'dashicons/svg-min/arrow-up.svg';
import { ReactComponent as ArrowDown } from 'dashicons/svg-min/arrow-down.svg';
import { ReactComponent as ArrowLeft } from 'dashicons/svg-min/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'dashicons/svg-min/arrow-right.svg';
import { ReactComponent as ArrowUpAlt } from 'dashicons/svg-min/arrow-up-alt.svg';
import { ReactComponent as ArrowDownAlt } from 'dashicons/svg-min/arrow-down-alt.svg';
import { ReactComponent as ArrowLeftAlt } from 'dashicons/svg-min/arrow-left-alt.svg';
import { ReactComponent as ArrowRightAlt } from 'dashicons/svg-min/arrow-right-alt.svg';
import { ReactComponent as ArrowUpAlt2 } from 'dashicons/svg-min/arrow-up-alt2.svg';
import { ReactComponent as ArrowDownAlt2 } from 'dashicons/svg-min/arrow-down-alt2.svg';
import { ReactComponent as ArrowLeftAlt2 } from 'dashicons/svg-min/arrow-left-alt2.svg';
import { ReactComponent as ArrowRightAlt2 } from 'dashicons/svg-min/arrow-right-alt2.svg';
import { ReactComponent as Leftright } from 'dashicons/svg-min/leftright.svg';
import { ReactComponent as Sort } from 'dashicons/svg-min/sort.svg';
import { ReactComponent as Randomize } from 'dashicons/svg-min/randomize.svg';
import { ReactComponent as ListView } from 'dashicons/svg-min/list-view.svg';
import { ReactComponent as ExcerptView } from 'dashicons/svg-min/excerpt-view.svg';
import { ReactComponent as GridView } from 'dashicons/svg-min/grid-view.svg';
import { ReactComponent as Move } from 'dashicons/svg-min/move.svg';
import { ReactComponent as Hammer } from 'dashicons/svg-min/hammer.svg';
import { ReactComponent as Art } from 'dashicons/svg-min/art.svg';
import { ReactComponent as Migrate } from 'dashicons/svg-min/migrate.svg';
import { ReactComponent as Performance } from 'dashicons/svg-min/performance.svg';
import { ReactComponent as UniversalAccess } from 'dashicons/svg-min/universal-access.svg';
import { ReactComponent as UniversalAccessAlt } from 'dashicons/svg-min/universal-access-alt.svg';
import { ReactComponent as Tickets } from 'dashicons/svg-min/tickets.svg';
import { ReactComponent as Nametag } from 'dashicons/svg-min/nametag.svg';
import { ReactComponent as Clipboard } from 'dashicons/svg-min/clipboard.svg';
import { ReactComponent as Heart } from 'dashicons/svg-min/heart.svg';
import { ReactComponent as Megaphone } from 'dashicons/svg-min/megaphone.svg';
import { ReactComponent as Schedule } from 'dashicons/svg-min/schedule.svg';
import { ReactComponent as Wordpress } from 'dashicons/svg-min/wordpress.svg';
import { ReactComponent as WordpressAlt } from 'dashicons/svg-min/wordpress-alt.svg';
import { ReactComponent as Pressthis } from 'dashicons/svg-min/pressthis.svg';
import { ReactComponent as Update } from 'dashicons/svg-min/update.svg';
import { ReactComponent as Screenoptions } from 'dashicons/svg-min/screenoptions.svg';
import { ReactComponent as Cart } from 'dashicons/svg-min/cart.svg';
import { ReactComponent as Feedback } from 'dashicons/svg-min/feedback.svg';
import { ReactComponent as Cloud } from 'dashicons/svg-min/cloud.svg';
import { ReactComponent as Translation } from 'dashicons/svg-min/translation.svg';
import { ReactComponent as Tag } from 'dashicons/svg-min/tag.svg';
import { ReactComponent as Category } from 'dashicons/svg-min/category.svg';
import { ReactComponent as Archive } from 'dashicons/svg-min/archive.svg';
import { ReactComponent as Tagcloud } from 'dashicons/svg-min/tagcloud.svg';
import { ReactComponent as Text } from 'dashicons/svg-min/text.svg';
import { ReactComponent as MediaArchive } from 'dashicons/svg-min/media-archive.svg';
import { ReactComponent as MediaAudio } from 'dashicons/svg-min/media-audio.svg';
import { ReactComponent as MediaCode } from 'dashicons/svg-min/media-code.svg';
import { ReactComponent as MediaDefault } from 'dashicons/svg-min/media-default.svg';
import { ReactComponent as MediaDocument } from 'dashicons/svg-min/media-document.svg';
import { ReactComponent as MediaInteractive } from 'dashicons/svg-min/media-interactive.svg';
import { ReactComponent as MediaSpreadsheet } from 'dashicons/svg-min/media-spreadsheet.svg';
import { ReactComponent as MediaText } from 'dashicons/svg-min/media-text.svg';
import { ReactComponent as MediaVideo } from 'dashicons/svg-min/media-video.svg';
import { ReactComponent as PlaylistAudio } from 'dashicons/svg-min/playlist-audio.svg';
import { ReactComponent as PlaylistVideo } from 'dashicons/svg-min/playlist-video.svg';
import { ReactComponent as ControlsPlay } from 'dashicons/svg-min/controls-play.svg';
import { ReactComponent as ControlsPause } from 'dashicons/svg-min/controls-pause.svg';
import { ReactComponent as ControlsForward } from 'dashicons/svg-min/controls-forward.svg';
import { ReactComponent as ControlsSkipforward } from 'dashicons/svg-min/controls-skipforward.svg';
import { ReactComponent as ControlsBack } from 'dashicons/svg-min/controls-back.svg';
import { ReactComponent as ControlsSkipback } from 'dashicons/svg-min/controls-skipback.svg';
import { ReactComponent as ControlsRepeat } from 'dashicons/svg-min/controls-repeat.svg';
import { ReactComponent as ControlsVolumeon } from 'dashicons/svg-min/controls-volumeon.svg';
import { ReactComponent as ControlsVolumeoff } from 'dashicons/svg-min/controls-volumeoff.svg';
import { ReactComponent as Yes } from 'dashicons/svg-min/yes.svg';
import { ReactComponent as No } from 'dashicons/svg-min/no.svg';
import { ReactComponent as NoAlt } from 'dashicons/svg-min/no-alt.svg';
import { ReactComponent as Plus } from 'dashicons/svg-min/plus.svg';
import { ReactComponent as PlusAlt } from 'dashicons/svg-min/plus-alt.svg';
import { ReactComponent as Minus } from 'dashicons/svg-min/minus.svg';
import { ReactComponent as Dismiss } from 'dashicons/svg-min/dismiss.svg';
import { ReactComponent as Marker } from 'dashicons/svg-min/marker.svg';
import { ReactComponent as StarFilled } from 'dashicons/svg-min/star-filled.svg';
import { ReactComponent as StarHalf } from 'dashicons/svg-min/star-half.svg';
import { ReactComponent as StarEmpty } from 'dashicons/svg-min/star-empty.svg';
import { ReactComponent as Flag } from 'dashicons/svg-min/flag.svg';
import { ReactComponent as Info } from 'dashicons/svg-min/info.svg';
import { ReactComponent as Warning } from 'dashicons/svg-min/warning.svg';
import { ReactComponent as Share } from 'dashicons/svg-min/share.svg';
import { ReactComponent as ShareAlt } from 'dashicons/svg-min/share-alt.svg';
import { ReactComponent as ShareAlt2 } from 'dashicons/svg-min/share-alt2.svg';
import { ReactComponent as Twitter } from 'dashicons/svg-min/twitter.svg';
import { ReactComponent as Rss } from 'dashicons/svg-min/rss.svg';
import { ReactComponent as Email } from 'dashicons/svg-min/email.svg';
import { ReactComponent as EmailAlt } from 'dashicons/svg-min/email-alt.svg';
import { ReactComponent as Facebook } from 'dashicons/svg-min/facebook.svg';
import { ReactComponent as FacebookAlt } from 'dashicons/svg-min/facebook-alt.svg';
import { ReactComponent as Networking } from 'dashicons/svg-min/networking.svg';
import { ReactComponent as Googleplus } from 'dashicons/svg-min/googleplus.svg';
import { ReactComponent as Location } from 'dashicons/svg-min/location.svg';
import { ReactComponent as LocationAlt } from 'dashicons/svg-min/location-alt.svg';
import { ReactComponent as Camera } from 'dashicons/svg-min/camera.svg';
import { ReactComponent as ImagesAlt } from 'dashicons/svg-min/images-alt.svg';
import { ReactComponent as ImagesAlt2 } from 'dashicons/svg-min/images-alt2.svg';
import { ReactComponent as VideoAlt } from 'dashicons/svg-min/video-alt.svg';
import { ReactComponent as VideoAlt2 } from 'dashicons/svg-min/video-alt2.svg';
import { ReactComponent as VideoAlt3 } from 'dashicons/svg-min/video-alt3.svg';
import { ReactComponent as Vault } from 'dashicons/svg-min/vault.svg';
import { ReactComponent as Shield } from 'dashicons/svg-min/shield.svg';
import { ReactComponent as ShieldAlt } from 'dashicons/svg-min/shield-alt.svg';
import { ReactComponent as Sos } from 'dashicons/svg-min/sos.svg';
import { ReactComponent as Search } from 'dashicons/svg-min/search.svg';
import { ReactComponent as Slides } from 'dashicons/svg-min/slides.svg';
import { ReactComponent as Analytics } from 'dashicons/svg-min/analytics.svg';
import { ReactComponent as ChartPie } from 'dashicons/svg-min/chart-pie.svg';
import { ReactComponent as ChartBar } from 'dashicons/svg-min/chart-bar.svg';
import { ReactComponent as ChartLine } from 'dashicons/svg-min/chart-line.svg';
import { ReactComponent as ChartArea } from 'dashicons/svg-min/chart-area.svg';
import { ReactComponent as Groups } from 'dashicons/svg-min/groups.svg';
import { ReactComponent as Businessman } from 'dashicons/svg-min/businessman.svg';
import { ReactComponent as ID } from 'dashicons/svg-min/id.svg';
import { ReactComponent as IDAlt } from 'dashicons/svg-min/id-alt.svg';
import { ReactComponent as Products } from 'dashicons/svg-min/products.svg';
import { ReactComponent as Awards } from 'dashicons/svg-min/awards.svg';
import { ReactComponent as Forms } from 'dashicons/svg-min/forms.svg';
import { ReactComponent as Testimonial } from 'dashicons/svg-min/testimonial.svg';
import { ReactComponent as Portfolio } from 'dashicons/svg-min/portfolio.svg';
import { ReactComponent as Book } from 'dashicons/svg-min/book.svg';
import { ReactComponent as BookAlt } from 'dashicons/svg-min/book-alt.svg';
import { ReactComponent as Download } from 'dashicons/svg-min/download.svg';
import { ReactComponent as Upload } from 'dashicons/svg-min/upload.svg';
import { ReactComponent as Backup } from 'dashicons/svg-min/backup.svg';
import { ReactComponent as Clock } from 'dashicons/svg-min/clock.svg';
import { ReactComponent as Lightbulb } from 'dashicons/svg-min/lightbulb.svg';
import { ReactComponent as Microphone } from 'dashicons/svg-min/microphone.svg';
import { ReactComponent as Desktop } from 'dashicons/svg-min/desktop.svg';
import { ReactComponent as Laptop } from 'dashicons/svg-min/laptop.svg';
import { ReactComponent as Tablet } from 'dashicons/svg-min/tablet.svg';
import { ReactComponent as Smartphone } from 'dashicons/svg-min/smartphone.svg';
import { ReactComponent as Phone } from 'dashicons/svg-min/phone.svg';
import { ReactComponent as Smiley } from 'dashicons/svg-min/smiley.svg';
import { ReactComponent as IndexCard } from 'dashicons/svg-min/index-card.svg';
import { ReactComponent as Carrot } from 'dashicons/svg-min/carrot.svg';
import { ReactComponent as Building } from 'dashicons/svg-min/building.svg';
import { ReactComponent as Store } from 'dashicons/svg-min/store.svg';
import { ReactComponent as Album } from 'dashicons/svg-min/album.svg';
import { ReactComponent as Palmtree } from 'dashicons/svg-min/palmtree.svg';
import { ReactComponent as TicketsAlt } from 'dashicons/svg-min/tickets-alt.svg';
import { ReactComponent as Money } from 'dashicons/svg-min/money.svg';
import { ReactComponent as ThumbsUp } from 'dashicons/svg-min/thumbs-up.svg';
import { ReactComponent as ThumbsDown } from 'dashicons/svg-min/thumbs-down.svg';
import { ReactComponent as Layout } from 'dashicons/svg-min/layout.svg';
import { ReactComponent as Paperclip } from 'dashicons/svg-min/paperclip.svg';
import { ReactComponent as EmailAlt2 } from 'dashicons/svg-min/email-alt2.svg';
import { ReactComponent as MenuAlt } from 'dashicons/svg-min/menu-alt.svg';
import { ReactComponent as PlusLight } from 'dashicons/svg-min/plus-light.svg';
import { ReactComponent as Trash } from 'dashicons/svg-min/trash.svg';
import { ReactComponent as Heading } from 'dashicons/svg-min/gutenberg/heading.svg';
import { ReactComponent as Insert } from 'dashicons/svg-min/gutenberg/insert.svg';
import { ReactComponent as Saved } from 'dashicons/svg-min/gutenberg/saved.svg';
import { ReactComponent as AlignFullWidth } from 'dashicons/svg-min/gutenberg/align-full-width.svg';
import { ReactComponent as Button } from 'dashicons/svg-min/gutenberg/button.svg';
import { ReactComponent as AlignWide } from 'dashicons/svg-min/gutenberg/align-wide.svg';
import { ReactComponent as Ellipsis } from 'dashicons/svg-min/gutenberg/ellipsis.svg';
import { ReactComponent as BuddiconsActivity } from 'dashicons/svg-min/buddicons-activity.svg';
import { ReactComponent as BuddiconsBuddypressLogo } from 'dashicons/svg-min/buddicons-buddypress-logo.svg';
import { ReactComponent as BuddiconsCommunity } from 'dashicons/svg-min/buddicons-community.svg';
import { ReactComponent as BuddiconsForums } from 'dashicons/svg-min/buddicons-forums.svg';
import { ReactComponent as BuddiconsFriends } from 'dashicons/svg-min/buddicons-friends.svg';
import { ReactComponent as BuddiconsGroups } from 'dashicons/svg-min/buddicons-groups.svg';
import { ReactComponent as BuddiconsPm } from 'dashicons/svg-min/buddicons-pm.svg';
import { ReactComponent as BuddiconsReplies } from 'dashicons/svg-min/buddicons-replies.svg';
import { ReactComponent as BuddiconsTopics } from 'dashicons/svg-min/buddicons-topics.svg';
import { ReactComponent as BuddiconsTracking } from 'dashicons/svg-min/buddicons-tracking.svg';
import { ReactComponent as AdminSiteAlt } from 'dashicons/svg-min/admin-site-alt.svg';
import { ReactComponent as AdminSiteAlt2 } from 'dashicons/svg-min/admin-site-alt2.svg';
import { ReactComponent as AdminSiteAlt3 } from 'dashicons/svg-min/admin-site-alt3.svg';
import { ReactComponent as HTML } from 'dashicons/svg-min/gutenberg/html.svg';
import { ReactComponent as RestApi } from 'dashicons/svg-min/rest-api.svg';
import { ReactComponent as EditorLtr } from 'dashicons/svg-min/editor-ltr.svg';
import { ReactComponent as YesAlt } from 'dashicons/svg-min/yes-alt.svg';
import { ReactComponent as BuddiconsBbpressLogo } from 'dashicons/svg-min/buddicons-bbpress-logo.svg';
import { ReactComponent as Tide } from 'dashicons/svg-min/tide.svg';

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
