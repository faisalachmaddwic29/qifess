export const useSidebar = defineStore("sidebar", () => {
    const sidebar = ref(false);
    const profile = ref(false);

    const toggleSidebar = () => {
        sidebar.value = !sidebar.value;
    };

    const isActiveSidebar = (route: LinkType, from: string | null) => {
        if (from === 'sidebar') {
            const tabsStore = useTabs();
            tabsStore.addTab(route);
        }
    };

    const toggleProfile = () => {
        profile.value = !profile.value;
    };

    return { sidebar, profile, toggleProfile, toggleSidebar, isActiveSidebar };
});
