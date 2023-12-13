<template>
    <v-navigation-drawer
        app
        class="bg-white"
        border="0"
        :value="false"
        v-model="sidebarStore.sidebar"
        :permanent="sidebarStore.sidebar"
        disable-resize-watcher
    >
        <v-list
            dense
            nav
            v-for="(link, index) in links"
            :key="index"
            class="pt-3"
        >
            <v-list-subheader
                class="text-subtitle-1 text-primary-light-1 font-weight-black text-uppercase"
                >{{ link.title }}</v-list-subheader
            >
            <v-list-item
                v-for="item in link.items"
                :key="item.path"
                :prepend-icon="item.icon"
                :value="item.value"
                :to="item.path"
                :active="item.value === route.name"
                @click="sidebarStore.isActiveSidebar(item, 'sidebar')"
            >
                <v-list-item-title
                    class="text-subtitle-1 font-weight-regular"
                    >{{ item.name }}</v-list-item-title
                >
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <div class="sidebar-profile">
        <v-navigation-drawer
            app
            location="right"
            class="bg-white"
            width="300"
            border="0"
            :permanent="sidebarStore.profile"
            :value="false"
            v-model="sidebarStore.profile"
            disable-resize-watcher
        >
            <ProfilePhoto />
            <ProfileInformation />
        </v-navigation-drawer>
    </div>
</template>

<style scoped>
.v-list--density-default .v-list-subheader {
    min-height: 10px !important;
    margin-bottom: 4px;
}

.v-navigation-drawer {
    margin-top: 50px;
    height: calc(100% - 75px) !important;
    margin-bottom: 25px;
}

.v-list-item--nav .v-list-item-title {
    line-height: 1.3rem;
}
</style>

<script setup lang="ts">
const sidebarStore = useSidebar();
const route = useRoute();

const links = [
    {
        title: "Dashboard",
        items: [
            {
                path: "/home",
                icon: "mdi-home",
                name: "Home",
                value: "home",
            },
            {
                path: "/about",
                icon: "mdi-account",
                name: "About",
                value: "about",
            },
            {
                path: "/event",
                icon: "mdi-abacus",
                name: "Event",
                value: "event",
            },
        ],
    },
    {
        title: "Phone",
        items: [
            {
                path: "/contact",
                icon: "mdi-contacts",
                name: "Contact",
                value: "contact",
            },
            {
                path: "/headlight",
                icon: "mdi-light-flood-down",
                name: "Headlight",
                value: "headlight",
            },
        ],
    },
    {
        title: "Address",
        items: [
            {
                path: "/maps",
                icon: "mdi-map-marker",
                name: "Maps",
                value: "maps",
            },
            {
                path: "/info",
                icon: "mdi-information",
                name: "Info",
                value: "info",
            },
        ],
    },

    {
        title: "Profile",
        items: [
            {
                path: "/user",
                icon: "mdi-map-marker",
                name: "User",
                value: "user",
            },
            {
                path: "/test",
                icon: "mdi-information",
                name: "Test",
                value: "test",
            },
        ],
    },

    {
        title: "Settings",
        items: [
            {
                path: "/change-password",
                icon: "mdi-map-marker",
                name: "Change Password",
                value: "change-password",
            },
            {
                path: "/edit-profile",
                icon: "mdi-information",
                name: "Edit Profile",
                value: "edit-profile",
            },
            {
                path: "/monitor-user",
                icon: "mdi-information",
                name: "Monitor User",
                value: "monitor-user",
            },
            {
                path: "/permen-iklan",
                icon: "mdi-information",
                name: "Permen Iklan",
                value: "permen-iklan",
            },
        ],
    },
];
</script>
