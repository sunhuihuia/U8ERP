import defaultSettings from "@/settings";
// 导入 Element Plus 中英文语言包
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";
import { store } from "@/store";
// setup
export const useAppStore = defineStore("app", () => {
  // state
  const device = useStorage("device", "desktop" /* DeviceEnum.DESKTOP */);
  const size = useStorage("size", defaultSettings.size);
  const language = useStorage("language", defaultSettings.language);
  const sidebarStatus = useStorage(
    "sidebarStatus",
    "closed" /* SidebarStatusEnum.CLOSED */
  );
  const sidebar = reactive({
    opened: sidebarStatus.value === "opened" /* SidebarStatusEnum.OPENED */,
    withoutAnimation: false,
  });
  const activeTopMenuPath = useStorage("activeTopMenuPath", "");
  /**
   * 根据语言标识读取对应的语言包
   */
  const locale = computed(() => {
    if (language?.value == "en") {
      return en;
    } else {
      return zhCn;
    }
  });
  // actions
  function toggleSidebar() {
    sidebar.opened = !sidebar.opened;
    sidebarStatus.value = sidebar.opened
      ? "opened" /* SidebarStatusEnum.OPENED */
      : "closed" /* SidebarStatusEnum.CLOSED */;
  }
  function closeSideBar() {
    sidebar.opened = false;
    sidebarStatus.value = "closed" /* SidebarStatusEnum.CLOSED */;
  }
  function openSideBar() {
    sidebar.opened = true;
    sidebarStatus.value = "opened" /* SidebarStatusEnum.OPENED */;
  }
  function toggleDevice(val) {
    device.value = val;
  }
  function changeSize(val) {
    size.value = val;
  }
  /**
   * 切换语言
   *
   * @param val
   */
  function changeLanguage(val) {
    language.value = val;
  }
  /**
   * 混合模式顶部切换
   */
  function activeTopMenu(val) {
    activeTopMenuPath.value = val;
  }
  return {
    device,
    sidebar,
    language,
    locale,
    size,
    activeTopMenu,
    toggleDevice,
    changeSize,
    changeLanguage,
    toggleSidebar,
    closeSideBar,
    openSideBar,
    activeTopMenuPath,
  };
});
// 手动提供给 useStore() 函数 pinia 实例
// https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
export function useAppStoreHook() {
  return useAppStore(store);
}
