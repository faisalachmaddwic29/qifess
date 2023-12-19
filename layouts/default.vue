<template>
    <v-app>
        <NavbarToolbar />
        <NavbarSidebar />
        <NavbarTabbar />
        <v-main class="bg-content">
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
