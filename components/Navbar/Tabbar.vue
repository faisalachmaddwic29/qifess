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
        slider-color="#0088ca"
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
            @click="sidebarStore.isActiveSidebar(item)"
        >
            <p
                class="text-capitalize font-weight-medium px-4"
                style="letter-spacing: normal; font-size: 14px"
            >
                {{ item.name }}
                <!-- <p>{{ item.value === route.name }}</p> -->
            </p>

            <v-btn
                density="compact"
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

console.log(route);
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
