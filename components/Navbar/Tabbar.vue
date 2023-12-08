<template>
    <v-tabs
        v-model="tab"
        density="compact"
        show-arrows
        border="0"
        style="border-bottom: 1px solid #ddd"
        height="40"
        color="white"
        align-tabs="start"
        slider-color="transparent"
    >
        <v-tab
            v-for="item in tabsStore.dataTabs"
            :to="item.path"
            :key="item.path"
            :value="item.value"
            :class="{
                'bg-primary-dark-1': item.value === route.name,
                'px-2': true,
            }"
        >
            <div
                class="v-tab__slider"
                style="
                    height: 4px;
                    width: 100%;
                    bottom: 0;
                    color: #0088ca !important;
                    caret-color: #0088ca;
                "
                :class="{
                    'opacity-1': item.value === route.name,
                }"
            ></div>
            <p
                @click="sidebarStore.isActiveSidebar(item)"
                class="text-capitalize font-weight-medium px-4"
                style="letter-spacing: normal; font-size: 14px"
            >
                {{ item.name }}
                <!-- <p>{{ item.value === route.name }}</p> -->
            </p>

            <v-btn
                density="compact"
                :to="item.path"
                @click="tabsStore.removeTab(item.path)"
                icon="mdi-close"
                size="x-small"
                variant="plain"
            ></v-btn>
        </v-tab>

        <v-window v-model="tab"> </v-window>
    </v-tabs>
</template>

<script setup>
const tabsStore = useTabs();
const sidebarStore = useSidebar();
const route = useRoute();
const tab = ref(route.path);
</script>

<style scoped>
.v-tabs {
    color: #bbbbbb;
}

.theme--dark.v-tabs-items {
    background-color: transparent !important;
}
.theme--light.v-tabs-items {
    background-color: transparent !important;
}
</style>
