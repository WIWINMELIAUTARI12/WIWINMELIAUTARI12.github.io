	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.showThicknessOnMobile="no";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#239319";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=59;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1448;;bookConfig.securityType="1";bookConfig.bookTitle="Biru Merah Muda Ilustrasi Cat Air Sampul LKPD Seni Lukis Dokumen A4_20241115_120445_0000.pdf";bookConfig.bookmarkCR="7ce2d09cae0888980a5bf75cb620eb5711c56df2";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="javascript/text_position[1].js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.userListPath="../files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202512140281215","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"","x":"0.15454299999999999","y":"0.842378","width":"0.21878799999999998","height":"-0.017287999999999998","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"http://png.com","linkTarget":"Blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140285390","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie1","x":"0.34573023163925526","y":"0.14666596825729403","width":"0.27263298266409836","height":"0.315681036439509","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/Sesi belajar1 _Fase 1.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140287721","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie2","x":"0.1982461050471126","y":"0.13686883677978962","width":"0.6158456945610599","height":"0.20942581049437684","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/Jenis-jenis termometer_No.9.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140287124","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie3","x":"0.16559380539229407","y":"0.12367665974077374","width":"0.6999253661722177","height":"0.24570429735167051","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/Konversi skala termo_No.10.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140289845","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie4","x":"0.3381845321391921","y":"0.18963754493585305","width":"0.2892060826569643","height":"0.29187691698822604","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/Sessi belajar 2_fase 1.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202512140287321","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube2","x":"0.5860621326616289","y":"0.6363906203621252","width":"0.32913518052057095","height":"0.13178984861976847","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"https://www.youtube.com/watch?v=ZBcQOihPAHw","playerParameters":"autoplay=0\&loop=0"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"20251214028634","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube3","x":"0.5894206549118388","y":"0.696942712971208","width":"0.26028547439126787","height":"0.09498367468091422","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"https://www.youtube.com/watch?v=Sn_Q1aSZdzQ","playerParameters":"autoplay=0\&loop=0"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202512140285933","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube1","x":"0.6028547439126785","y":"0.6981300089047195","width":"0.29932829554995805","height":"0.1275749480558029","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"https://www.youtube.com/watch?v=qEOF_lm_S_Q","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140285495","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie5","x":"0.16792611251049538","y":"0.33310247023515055","width":"0.6040675436141432","height":"0.20612776623462287","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/visualisasi isobarik_No.25.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140284192","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie6","x":"0.20291071928351528","y":"0.197882655585238","width":"0.5690829368411233","height":"0.2209689654035157","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/visualisasi ishokhorik_No.26.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202512140289203","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link1","x":"0.186423","y":"0.472178","width":"0.133552","height":"0.017816","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.google.com/search?sca_esv=adde10145c0e0ebd\&rlz=1C1YTUH_idID1125ID1126\&cs=0\&sxsrf=AE3TifPCwpJfHEuiyuBptNDihA-4SZpjug%3A1754576058884\&q=Hukum+Boyle\&sa=X\&ved=2ahUKEwiDir-V8fiOAxWaRmwGHd2JAr8QxccNegQIBhAB\&mstk=AUtExfALLx8Lp150PNZt-gEE-FQymE3I-jU2XN55YtcyUQmCrMoyNiRhsr0Z0J8_HPEtkqDOZDMu405vRnL57gy192NqJTL4ccjvxAmWxh0XF3W1t41J8O-zSx5bspmro8rJ6UYEL-b9LDNYf0jnn-UUY5OBgM38W1teimLF_KRDQSoEfkltZgCW6m-2iJydssmIYgepaAk3Z3iUpiIY_jtKKlyNG0tPYae6joDH0zde50ORtFQtcB1tnb_OqhUvtqChpObQfB48zth7tfQIZQmFSrTehJAKUFmWwmr36vn8BYW5JA\&csui=3","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202512140287476","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link2","x":"0.8354430000000002","y":"0.09178","width":"0.064256","height":"0.017816","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.google.com/search?sca_esv=adde10145c0e0ebd\&rlz=1C1YTUH_idID1125ID1126\&cs=0\&sxsrf=AE3TifPCwpJfHEuiyuBptNDihA-4SZpjug%3A1754576058884\&q=proses+isotermal\&sa=X\&ved=2ahUKEwiDir-V8fiOAxWaRmwGHd2JAr8QxccNegQIAhAB\&mstk=AUtExfALLx8Lp150PNZt-gEE-FQymE3I-jU2XN55YtcyUQmCrMoyNiRhsr0Z0J8_HPEtkqDOZDMu405vRnL57gy192NqJTL4ccjvxAmWxh0XF3W1t41J8O-zSx5bspmro8rJ6UYEL-b9LDNYf0jnn-UUY5OBgM38W1teimLF_KRDQSoEfkltZgCW6m-2iJydssmIYgepaAk3Z3iUpiIY_jtKKlyNG0tPYae6joDH0zde50ORtFQtcB1tnb_OqhUvtqChpObQfB48zth7tfQIZQmFSrTehJAKUFmWwmr36vn8BYW5JA\&csui=3","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoLink","annoId":"202512140282138","alpha":"1","overColor":"8388736","downColor":"8388736","outColor":"11184810","overAlpha":"0.2","downAlpha":"0.2","outAlpha":"0","pageViewedBool":"true","ellipseH":"0","ellipseW":"0","location":{"tannoName":"link3","x":"0.103429","y":"0.11226799999999999","width":"0.09323400000000001","height":"0.017816","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"0","hintShapeAlpha":"0","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"0","shadowAngle":"0","shadowColor":"0","shadowAlpha":"0","shadowBlurX":"0","shadowBlurY":"0"},"highlightsBool":"false","linkStatus":"1","mouseOver":"false","borderColor":"16737792","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://www.google.com/search?sca_esv=adde10145c0e0ebd\&rlz=1C1YTUH_idID1125ID1126\&cs=0\&sxsrf=AE3TifPCwpJfHEuiyuBptNDihA-4SZpjug%3A1754576058884\&q=proses+isotermal\&sa=X\&ved=2ahUKEwiDir-V8fiOAxWaRmwGHd2JAr8QxccNegQIAhAB\&mstk=AUtExfALLx8Lp150PNZt-gEE-FQymE3I-jU2XN55YtcyUQmCrMoyNiRhsr0Z0J8_HPEtkqDOZDMu405vRnL57gy192NqJTL4ccjvxAmWxh0XF3W1t41J8O-zSx5bspmro8rJ6UYEL-b9LDNYf0jnn-UUY5OBgM38W1teimLF_KRDQSoEfkltZgCW6m-2iJydssmIYgepaAk3Z3iUpiIY_jtKKlyNG0tPYae6joDH0zde50ORtFQtcB1tnb_OqhUvtqChpObQfB48zth7tfQIZQmFSrTehJAKUFmWwmr36vn8BYW5JA\&csui=3","linkTarget":"Blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140282009","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie7","x":"0.19124918369250865","y":"0.16655123511757527","width":"0.5994029293777405","height":"0.192935589195607","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/visualisasi isotermal_No.27 .mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140287001","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie8","x":"0.36850452467580935","y":"0.19623363345536096","width":"0.3101968467207762","height":"0.3232083374558887","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/Fakta unik pemuaian_No.29 .mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140284857","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie1","x":"0.34424853064651556","y":"0.1642426041357475","width":"0.3050657710607333","height":"0.29880280993370933","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/Sesi belajar 3_fase 1.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202512140284491","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie2","x":"0.22390148334732718","y":"0.6213515385376472","width":"0.5653512454520011","height":"0.22360740081131897","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/Pengaruh kalor trhdp suhu_No.35 .mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[],[],[],[],[],[],[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202512140283162","alpha":"1","mouseOverEffect":"2","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.279876854184159","y":"0.180468981893737","width":"0.4433249370277078","height":"0.2532897991491046","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1280","imgOriginalHeight":"1170","url":"./files/pageConfig/Sesi belajar 4_fase 1 .jpg","originalURL":"./files/pageConfig/Sesi belajar 4_fase 1 .jpg","effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202512140288395","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube1","x":"0.1964735516372796","y":"0.5900860789551796","width":"0.5541561712846348","height":"0.20896408429801128","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"https://www.youtube.com/watch?v=LbRbEMZslP0","playerParameters":"autoplay=0\&loop=0"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"202512140283820","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube2","x":"0.2216624685138539","y":"0.23033541110121697","width":"0.49538203190596136","height":"0.19115464529533988","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"https://www.youtube.com/watch?v=9gzJiBfaWZg","playerParameters":"autoplay=0\&loop=0"},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoYouTube","annoId":"20251214028908","alpha":"1","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","location":{"tannoName":"youtube3","x":"0.21158690176322417","y":"0.5449688334817453","width":"0.5088161209068011","height":"0.18996734936182844","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.5","pageHeight":"842.25"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.youtube.TAnnoYouTube","videoId":"https://www.youtube.com/watch?v=JKZagxk2uwA","playerParameters":"autoplay=0\&loop=0"}],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=true;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}