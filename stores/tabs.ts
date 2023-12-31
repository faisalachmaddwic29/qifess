import { defineStore } from "pinia";

export const useTabs = defineStore("tabs", () => {
    const dataTabs: Ref<(LinkType | null)[]> = ref([]);
    
    const addTab = (route: LinkType) => {
        const cookie = useCookie("tab");
        cookie.value = JSON.stringify(route);

        if (dataTabs.value.length == 0) {
            dataTabs.value.push(route);
            return;
        }

        let index = dataTabs.value.findIndex(
            (tab) => tab?.path === route?.path
        );

        if (index === -1) dataTabs.value.push(route);
    };

    const removeTab = (path: string) => {
        let index = dataTabs.value.findIndex((tab) => {
            return tab?.path === path;
        });

        if (index > -1) dataTabs.value.splice(index, 1);

        if (dataTabs.value.length - 1 >= 0) {
            return navigateTo({
                path: dataTabs.value[dataTabs.value.length - 1]?.path ?? "/",
                replace: true,
                force: true,
            });
        } else {
            return navigateTo({
                path: "/",
                replace: true,
                force: true,
            });
        }
    };

    const clearTabs = () => {
        dataTabs.value.splice(0, dataTabs.value.length);
    };

    const getTabFromCookie = () => {
        const tab = useCookie("tab");
        if (tab.value) {
            const data = JSON.parse(JSON.stringify(tab.value));
            dataTabs.value = [data];
            return navigateTo({
                path: data.path,
                replace: true,
                force: true,
            });
        }
    };

    return { dataTabs, addTab, removeTab, clearTabs, getTabFromCookie };
});
