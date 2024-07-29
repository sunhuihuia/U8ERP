const { pkg } = __APP_INFO__;
const defaultSettings = {
  title: "用友SRM", //pkg.name,
  version: "",
  showSettings: true,
  tagsView: true,
  fixedHeader: true,
  sidebarLogo: true,
  layout: "left" /* LayoutEnum.LEFT */,
  theme: "light" /* ThemeEnum.LIGHT */,
  size: "default" /* SizeEnum.DEFAULT */,
  language: "zh-cn" /* LanguageEnum.ZH_CN */,
  themeColor: "#409EFF",
  watermarkEnabled: false,
  watermarkContent: pkg.name,
};
export default defaultSettings;
