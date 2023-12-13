<template>
    <v-app>
        <NavbarToolbar />
        <NavbarSidebar />
        <v-main class="bg-content">
            <NavbarTabbar />
            <v-container fluid class="pa-2" id="content">
                <slot />
            </v-container>
        </v-main>
        <NavbarFooter />
    </v-app>
</template>

<style scoped>
.v-main {
    margin-top: 90px;
}
</style>
