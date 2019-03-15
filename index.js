import titleCase from 'title-case';
import glyphs from './glyphs.json';
import groupsNames from './groups.json';
// import codepoints from 'dashicons/codepoints.json'

import { ReactComponent as Menu } from './svg/menu.svg';
import { ReactComponent as AdminSite } from './svg/admin-site.svg';
import { ReactComponent as Dashboard } from './svg/dashboard.svg';
import { ReactComponent as AdminMedia } from './svg/admin-media.svg';
import { ReactComponent as AdminPage } from './svg/admin-page.svg';
import { ReactComponent as AdminComments } from './svg/admin-comments.svg';
import { ReactComponent as AdminAppearance } from './svg/admin-appearance.svg';
import { ReactComponent as AdminPlugins } from './svg/admin-plugins.svg';
import { ReactComponent as AdminUsers } from './svg/admin-users.svg';
import { ReactComponent as AdminTools } from './svg/admin-tools.svg';
import { ReactComponent as AdminSettings } from './svg/admin-settings.svg';
import { ReactComponent as AdminNetwork } from './svg/admin-network.svg';
import { ReactComponent as AdminGeneric } from './svg/admin-generic.svg';
import { ReactComponent as AdminHome } from './svg/admin-home.svg';
import { ReactComponent as AdminCollapse } from './svg/admin-collapse.svg';
import { ReactComponent as Filter } from './svg/filter.svg';
import { ReactComponent as AdminCustomizer } from './svg/admin-customizer.svg';
import { ReactComponent as AdminMultisite } from './svg/admin-multisite.svg';
import { ReactComponent as AdminLinks } from './svg/admin-links.svg';
import { ReactComponent as AdminPost } from './svg/admin-post.svg';
import { ReactComponent as FormatImage } from './svg/format-image.svg';
import { ReactComponent as FormatGallery } from './svg/format-gallery.svg';
import { ReactComponent as FormatAudio } from './svg/format-audio.svg';
import { ReactComponent as FormatVideo } from './svg/format-video.svg';
import { ReactComponent as FormatChat } from './svg/format-chat.svg';
import { ReactComponent as FormatStatus } from './svg/format-status.svg';
import { ReactComponent as FormatAside } from './svg/format-aside.svg';
import { ReactComponent as FormatQuote } from './svg/format-quote.svg';
import { ReactComponent as WelcomeWriteBlog } from './svg/welcome-write-blog.svg';
import { ReactComponent as WelcomeAddPage } from './svg/welcome-add-page.svg';
import { ReactComponent as WelcomeViewSite } from './svg/welcome-view-site.svg';
import { ReactComponent as WelcomeWidgetsMenus } from './svg/welcome-widgets-menus.svg';
import { ReactComponent as WelcomeComments } from './svg/welcome-comments.svg';
import { ReactComponent as WelcomeLearnMore } from './svg/welcome-learn-more.svg';
import { ReactComponent as ImageCrop } from './svg/image-crop.svg';
import { ReactComponent as ImageRotate } from './svg/image-rotate.svg';
import { ReactComponent as ImageRotateLeft } from './svg/image-rotate-left.svg';
import { ReactComponent as ImageRotateRight } from './svg/image-rotate-right.svg';
import { ReactComponent as ImageFlipVertical } from './svg/image-flip-vertical.svg';
import { ReactComponent as ImageFlipHorizontal } from './svg/image-flip-horizontal.svg';
import { ReactComponent as ImageFilter } from './svg/image-filter.svg';
import { ReactComponent as Undo } from './svg/undo.svg';
import { ReactComponent as Redo } from './svg/redo.svg';
import { ReactComponent as EditorBold } from './svg/editor-bold.svg';
import { ReactComponent as EditorItalic } from './svg/editor-italic.svg';
import { ReactComponent as EditorUl } from './svg/editor-ul.svg';
import { ReactComponent as EditorOl } from './svg/editor-ol.svg';
import { ReactComponent as EditorQuote } from './svg/editor-quote.svg';
import { ReactComponent as EditorAlignleft } from './svg/editor-alignleft.svg';
import { ReactComponent as EditorAligncenter } from './svg/editor-aligncenter.svg';
import { ReactComponent as EditorAlignright } from './svg/editor-alignright.svg';
import { ReactComponent as EditorInsertmore } from './svg/editor-insertmore.svg';
import { ReactComponent as EditorSpellcheck } from './svg/editor-spellcheck.svg';
import { ReactComponent as EditorExpand } from './svg/editor-expand.svg';
import { ReactComponent as EditorContract } from './svg/editor-contract.svg';
import { ReactComponent as EditorKitchensink } from './svg/editor-kitchensink.svg';
import { ReactComponent as EditorUnderline } from './svg/editor-underline.svg';
import { ReactComponent as EditorJustify } from './svg/editor-justify.svg';
import { ReactComponent as EditorTextcolor } from './svg/editor-textcolor.svg';
import { ReactComponent as EditorPasteWord } from './svg/editor-paste-word.svg';
import { ReactComponent as EditorPasteText } from './svg/editor-paste-text.svg';
import { ReactComponent as EditorRemoveformatting } from './svg/editor-removeformatting.svg';
import { ReactComponent as EditorVideo } from './svg/editor-video.svg';
import { ReactComponent as EditorCustomchar } from './svg/editor-customchar.svg';
import { ReactComponent as EditorOutdent } from './svg/editor-outdent.svg';
import { ReactComponent as EditorIndent } from './svg/editor-indent.svg';
import { ReactComponent as EditorHelp } from './svg/editor-help.svg';
import { ReactComponent as EditorStrikethrough } from './svg/editor-strikethrough.svg';
import { ReactComponent as EditorUnlink } from './svg/editor-unlink.svg';
import { ReactComponent as EditorRtl } from './svg/editor-rtl.svg';
import { ReactComponent as EditorBreak } from './svg/editor-break.svg';
import { ReactComponent as EditorCode } from './svg/editor-code.svg';
import { ReactComponent as EditorParagraph } from './svg/editor-paragraph.svg';
import { ReactComponent as EditorTable } from './svg/editor-table.svg';
import { ReactComponent as AlignLeft } from './svg/align-left.svg';
import { ReactComponent as AlignRight } from './svg/align-right.svg';
import { ReactComponent as AlignCenter } from './svg/align-center.svg';
import { ReactComponent as AlignNone } from './svg/align-none.svg';
import { ReactComponent as Lock } from './svg/lock.svg';
import { ReactComponent as Unlock } from './svg/unlock.svg';
import { ReactComponent as Calendar } from './svg/calendar.svg';
import { ReactComponent as CalendarAlt } from './svg/calendar-alt.svg';
import { ReactComponent as Visibility } from './svg/visibility.svg';
import { ReactComponent as Hidden } from './svg/hidden.svg';
import { ReactComponent as PostStatus } from './svg/post-status.svg';
import { ReactComponent as Edit } from './svg/edit.svg';
import { ReactComponent as Sticky } from './svg/sticky.svg';
import { ReactComponent as External } from './svg/external.svg';
import { ReactComponent as ArrowUp } from './svg/arrow-up.svg';
import { ReactComponent as ArrowDown } from './svg/arrow-down.svg';
import { ReactComponent as ArrowLeft } from './svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from './svg/arrow-right.svg';
import { ReactComponent as ArrowUpAlt } from './svg/arrow-up-alt.svg';
import { ReactComponent as ArrowDownAlt } from './svg/arrow-down-alt.svg';
import { ReactComponent as ArrowLeftAlt } from './svg/arrow-left-alt.svg';
import { ReactComponent as ArrowRightAlt } from './svg/arrow-right-alt.svg';
import { ReactComponent as ArrowUpAlt2 } from './svg/arrow-up-alt2.svg';
import { ReactComponent as ArrowDownAlt2 } from './svg/arrow-down-alt2.svg';
import { ReactComponent as ArrowLeftAlt2 } from './svg/arrow-left-alt2.svg';
import { ReactComponent as ArrowRightAlt2 } from './svg/arrow-right-alt2.svg';
import { ReactComponent as Leftright } from './svg/leftright.svg';
import { ReactComponent as Sort } from './svg/sort.svg';
import { ReactComponent as Randomize } from './svg/randomize.svg';
import { ReactComponent as ListView } from './svg/list-view.svg';
import { ReactComponent as ExcerptView } from './svg/excerpt-view.svg';
import { ReactComponent as GridView } from './svg/grid-view.svg';
import { ReactComponent as Move } from './svg/move.svg';
import { ReactComponent as Hammer } from './svg/hammer.svg';
import { ReactComponent as Art } from './svg/art.svg';
import { ReactComponent as Migrate } from './svg/migrate.svg';
import { ReactComponent as Performance } from './svg/performance.svg';
import { ReactComponent as UniversalAccess } from './svg/universal-access.svg';
import { ReactComponent as UniversalAccessAlt } from './svg/universal-access-alt.svg';
import { ReactComponent as Tickets } from './svg/tickets.svg';
import { ReactComponent as Nametag } from './svg/nametag.svg';
import { ReactComponent as Clipboard } from './svg/clipboard.svg';
import { ReactComponent as Heart } from './svg/heart.svg';
import { ReactComponent as Megaphone } from './svg/megaphone.svg';
import { ReactComponent as Schedule } from './svg/schedule.svg';
import { ReactComponent as Wordpress } from './svg/wordpress.svg';
import { ReactComponent as WordpressAlt } from './svg/wordpress-alt.svg';
import { ReactComponent as Pressthis } from './svg/pressthis.svg';
import { ReactComponent as Update } from './svg/update.svg';
import { ReactComponent as Screenoptions } from './svg/screenoptions.svg';
import { ReactComponent as Cart } from './svg/cart.svg';
import { ReactComponent as Feedback } from './svg/feedback.svg';
import { ReactComponent as Cloud } from './svg/cloud.svg';
import { ReactComponent as Translation } from './svg/translation.svg';
import { ReactComponent as Tag } from './svg/tag.svg';
import { ReactComponent as Category } from './svg/category.svg';
import { ReactComponent as Archive } from './svg/archive.svg';
import { ReactComponent as Tagcloud } from './svg/tagcloud.svg';
import { ReactComponent as Text } from './svg/text.svg';
import { ReactComponent as MediaArchive } from './svg/media-archive.svg';
import { ReactComponent as MediaAudio } from './svg/media-audio.svg';
import { ReactComponent as MediaCode } from './svg/media-code.svg';
import { ReactComponent as MediaDefault } from './svg/media-default.svg';
import { ReactComponent as MediaDocument } from './svg/media-document.svg';
import { ReactComponent as MediaInteractive } from './svg/media-interactive.svg';
import { ReactComponent as MediaSpreadsheet } from './svg/media-spreadsheet.svg';
import { ReactComponent as MediaText } from './svg/media-text.svg';
import { ReactComponent as MediaVideo } from './svg/media-video.svg';
import { ReactComponent as PlaylistAudio } from './svg/playlist-audio.svg';
import { ReactComponent as PlaylistVideo } from './svg/playlist-video.svg';
import { ReactComponent as ControlsPlay } from './svg/controls-play.svg';
import { ReactComponent as ControlsPause } from './svg/controls-pause.svg';
import { ReactComponent as ControlsForward } from './svg/controls-forward.svg';
import { ReactComponent as ControlsSkipforward } from './svg/controls-skipforward.svg';
import { ReactComponent as ControlsBack } from './svg/controls-back.svg';
import { ReactComponent as ControlsSkipback } from './svg/controls-skipback.svg';
import { ReactComponent as ControlsRepeat } from './svg/controls-repeat.svg';
import { ReactComponent as ControlsVolumeon } from './svg/controls-volumeon.svg';
import { ReactComponent as ControlsVolumeoff } from './svg/controls-volumeoff.svg';
import { ReactComponent as Yes } from './svg/yes.svg';
import { ReactComponent as No } from './svg/no.svg';
import { ReactComponent as NoAlt } from './svg/no-alt.svg';
import { ReactComponent as Plus } from './svg/plus.svg';
import { ReactComponent as PlusAlt } from './svg/plus-alt.svg';
import { ReactComponent as Minus } from './svg/minus.svg';
import { ReactComponent as Dismiss } from './svg/dismiss.svg';
import { ReactComponent as Marker } from './svg/marker.svg';
import { ReactComponent as StarFilled } from './svg/star-filled.svg';
import { ReactComponent as StarHalf } from './svg/star-half.svg';
import { ReactComponent as StarEmpty } from './svg/star-empty.svg';
import { ReactComponent as Flag } from './svg/flag.svg';
import { ReactComponent as Info } from './svg/info.svg';
import { ReactComponent as Warning } from './svg/warning.svg';
import { ReactComponent as Share } from './svg/share.svg';
import { ReactComponent as ShareAlt } from './svg/share-alt.svg';
import { ReactComponent as ShareAlt2 } from './svg/share-alt2.svg';
import { ReactComponent as Twitter } from './svg/twitter.svg';
import { ReactComponent as Rss } from './svg/rss.svg';
import { ReactComponent as Email } from './svg/email.svg';
import { ReactComponent as EmailAlt } from './svg/email-alt.svg';
import { ReactComponent as Facebook } from './svg/facebook.svg';
import { ReactComponent as FacebookAlt } from './svg/facebook-alt.svg';
import { ReactComponent as Networking } from './svg/networking.svg';
import { ReactComponent as Googleplus } from './svg/googleplus.svg';
import { ReactComponent as Location } from './svg/location.svg';
import { ReactComponent as LocationAlt } from './svg/location-alt.svg';
import { ReactComponent as Camera } from './svg/camera.svg';
import { ReactComponent as ImagesAlt } from './svg/images-alt.svg';
import { ReactComponent as ImagesAlt2 } from './svg/images-alt2.svg';
import { ReactComponent as VideoAlt } from './svg/video-alt.svg';
import { ReactComponent as VideoAlt2 } from './svg/video-alt2.svg';
import { ReactComponent as VideoAlt3 } from './svg/video-alt3.svg';
import { ReactComponent as Vault } from './svg/vault.svg';
import { ReactComponent as Shield } from './svg/shield.svg';
import { ReactComponent as ShieldAlt } from './svg/shield-alt.svg';
import { ReactComponent as Sos } from './svg/sos.svg';
import { ReactComponent as Search } from './svg/search.svg';
import { ReactComponent as Slides } from './svg/slides.svg';
import { ReactComponent as Analytics } from './svg/analytics.svg';
import { ReactComponent as ChartPie } from './svg/chart-pie.svg';
import { ReactComponent as ChartBar } from './svg/chart-bar.svg';
import { ReactComponent as ChartLine } from './svg/chart-line.svg';
import { ReactComponent as ChartArea } from './svg/chart-area.svg';
import { ReactComponent as Groups } from './svg/groups.svg';
import { ReactComponent as Businessman } from './svg/businessman.svg';
import { ReactComponent as ID } from './svg/id.svg';
import { ReactComponent as IDAlt } from './svg/id-alt.svg';
import { ReactComponent as Products } from './svg/products.svg';
import { ReactComponent as Awards } from './svg/awards.svg';
import { ReactComponent as Forms } from './svg/forms.svg';
import { ReactComponent as Testimonial } from './svg/testimonial.svg';
import { ReactComponent as Portfolio } from './svg/portfolio.svg';
import { ReactComponent as Book } from './svg/book.svg';
import { ReactComponent as BookAlt } from './svg/book-alt.svg';
import { ReactComponent as Download } from './svg/download.svg';
import { ReactComponent as Upload } from './svg/upload.svg';
import { ReactComponent as Backup } from './svg/backup.svg';
import { ReactComponent as Clock } from './svg/clock.svg';
import { ReactComponent as Lightbulb } from './svg/lightbulb.svg';
import { ReactComponent as Microphone } from './svg/microphone.svg';
import { ReactComponent as Desktop } from './svg/desktop.svg';
import { ReactComponent as Laptop } from './svg/laptop.svg';
import { ReactComponent as Tablet } from './svg/tablet.svg';
import { ReactComponent as Smartphone } from './svg/smartphone.svg';
import { ReactComponent as Phone } from './svg/phone.svg';
import { ReactComponent as Smiley } from './svg/smiley.svg';
import { ReactComponent as IndexCard } from './svg/index-card.svg';
import { ReactComponent as Carrot } from './svg/carrot.svg';
import { ReactComponent as Building } from './svg/building.svg';
import { ReactComponent as Store } from './svg/store.svg';
import { ReactComponent as Album } from './svg/album.svg';
import { ReactComponent as Palmtree } from './svg/palmtree.svg';
import { ReactComponent as TicketsAlt } from './svg/tickets-alt.svg';
import { ReactComponent as Money } from './svg/money.svg';
import { ReactComponent as ThumbsUp } from './svg/thumbs-up.svg';
import { ReactComponent as ThumbsDown } from './svg/thumbs-down.svg';
import { ReactComponent as Layout } from './svg/layout.svg';
import { ReactComponent as Paperclip } from './svg/paperclip.svg';
import { ReactComponent as EmailAlt2 } from './svg/email-alt2.svg';
import { ReactComponent as MenuAlt } from './svg/menu-alt.svg';
import { ReactComponent as PlusLight } from './svg/plus-light.svg';
import { ReactComponent as Trash } from './svg/trash.svg';
import { ReactComponent as Heading } from './svg/gutenberg/heading.svg';
import { ReactComponent as Insert } from './svg/gutenberg/insert.svg';
import { ReactComponent as Saved } from './svg/gutenberg/saved.svg';
import { ReactComponent as AlignFullWidth } from './svg/gutenberg/align-full-width.svg';
import { ReactComponent as Button } from './svg/gutenberg/button.svg';
import { ReactComponent as AlignWide } from './svg/gutenberg/align-wide.svg';
import { ReactComponent as Ellipsis } from './svg/gutenberg/ellipsis.svg';
import { ReactComponent as BuddiconsActivity } from './svg/buddicons-activity.svg';
import { ReactComponent as BuddiconsBuddypressLogo } from './svg/buddicons-buddypress-logo.svg';
import { ReactComponent as BuddiconsCommunity } from './svg/buddicons-community.svg';
import { ReactComponent as BuddiconsForums } from './svg/buddicons-forums.svg';
import { ReactComponent as BuddiconsFriends } from './svg/buddicons-friends.svg';
import { ReactComponent as BuddiconsGroups } from './svg/buddicons-groups.svg';
import { ReactComponent as BuddiconsPm } from './svg/buddicons-pm.svg';
import { ReactComponent as BuddiconsReplies } from './svg/buddicons-replies.svg';
import { ReactComponent as BuddiconsTopics } from './svg/buddicons-topics.svg';
import { ReactComponent as BuddiconsTracking } from './svg/buddicons-tracking.svg';
import { ReactComponent as AdminSiteAlt } from './svg/admin-site-alt.svg';
import { ReactComponent as AdminSiteAlt2 } from './svg/admin-site-alt2.svg';
import { ReactComponent as AdminSiteAlt3 } from './svg/admin-site-alt3.svg';
import { ReactComponent as HTML } from './svg/gutenberg/html.svg';
import { ReactComponent as RestApi } from './svg/rest-api.svg';
import { ReactComponent as EditorLtr } from './svg/editor-ltr.svg';
import { ReactComponent as YesAlt } from './svg/yes-alt.svg';
import { ReactComponent as BuddiconsBbpressLogo } from './svg/buddicons-bbpress-logo.svg';
import { ReactComponent as Tide } from './svg/tide.svg';

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
