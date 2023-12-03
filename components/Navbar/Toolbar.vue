<template>
    <v-toolbar app rounded="0" class="bg-primary" height="50">
        <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-h5 text-white font-weight-bold"
            >Qifess</v-toolbar-title
        >

        <v-spacer></v-spacer>

        <div
            class="me-6 d-inline-flex"
            style="cursor: pointer"
            @click="toggleProfile"
        >
            <v-icon class="text-white me-2">mdi-account</v-icon>
            <p class="font-weight-bold text-capitalize">Super Admin</p>
        </div>
    </v-toolbar>
</template>

<style scoped>
.v-toolbar {
    z-index: 1;
    position: fixed !important;
}
</style>

<script setup>
const sidebar = useSidebar();
const profile = useProfile();

const toggleSidebar = () => {
    sidebar.value = !sidebar.value;
};

const toggleProfile = () => {
    profile.value = !profile.value;
};
</script>
