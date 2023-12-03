<template>
    <v-navigation-drawer app class="bg-white" v-model="sidebar">
        <v-list
            dense
            link
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
                v-for="(item, i) in link.items"
                :key="i"
                :prepend-icon="item.icon"
                :value="item.value"
                :to="item.route"
                @click="isActiveSidebar"
            >
                <v-list-item-title
                    class="text-subtitle-1 font-weight-regular"
                    >{{ item.title }}</v-list-item-title
                >
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
        app
        location="right"
        class="bg-white"
        width="300"
        v-model="profile"
    >
        <div
            style="height: 260px"
            class="bg-primary-light-1 d-flex justify-center align-center"
        >
            <div class="text-center">
                <div class="position-relative d-block">
                    <v-avatar size="100">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                        />
                    </v-avatar>

                    <label for="profile">
                        <v-avatar
                            color="primary"
                            class="position-absolute"
                            style="bottom: 0; right: 0; cursor: pointer"
                            size="28"
                        >
                            <v-icon class="text-white" size="16"
                                >mdi-upload</v-icon
                            >
                        </v-avatar>
                    </label>
                    <input
                        type="file"
                        class="d-none"
                        name="profile"
                        id="profile"
                    />
                </div>
                <p class="font-weight-bold text-capitalize mt-3">Super Admin</p>
            </div>
        </div>
        <div class="information">
            <v-container>
                <p>FAISAL</p>
            </v-container>
        </div>
    </v-navigation-drawer>
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
</style>

<script setup>
const sidebar = useSidebar();
const profile = useProfile();
const isActiveSidebar = () => {
    const links = document.querySelectorAll(".v-list-item--active");
    links.forEach((link) => link.classList.remove("v-list-item--active"));
};

const links = [
    {
        title: "Dashboard",
        items: [
            {
                route: "/",
                icon: "mdi-home",
                title: "Home",
                value: "home",
            },
            {
                route: "/about",
                icon: "mdi-account",
                title: "About",
                value: "about",
            },
            {
                route: "/event",
                icon: "mdi-abacus",
                title: "Events",
                value: "event",
            },
        ],
    },
    {
        title: "Phone",
        items: [
            {
                route: "/contact",
                icon: "mdi-contacts",
                title: "Contacts",
                value: "contact",
            },
            {
                route: "/headlight",
                icon: "mdi-light-flood-down",
                title: "Headlights",
                value: "headlights",
            },
        ],
    },
];
</script>
