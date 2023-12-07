<template>
    <div
        style="height: 260px"
        class="bg-primary-light-1 d-flex justify-center align-center position-relative"
    >
        <div
            class="position-absolute"
            style="top: 10px; right: 10px; cursor: pointer"
            @click="sidebarStore.profile = false"
        >
            <v-icon class="text-white" size="24">mdi-window-close</v-icon>
        </div>
        <div class="text-center">
            <div class="position-relative d-block">
                <v-avatar size="100">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" />
                </v-avatar>

                <label for="profile">
                    <v-avatar
                        color="primary"
                        class="position-absolute"
                        style="bottom: 0; right: 0; cursor: pointer"
                        size="28"
                    >
                        <v-icon class="text-white" size="16">mdi-upload</v-icon>
                    </v-avatar>
                </label>
                <input type="file" class="d-none" name="profile" id="profile" />
            </div>
            <p class="font-weight-bold text-capitalize mt-3">Super Admin</p>
        </div>
    </div>
</template>

<script setup>
const sidebarStore = useSidebar();
</script>
