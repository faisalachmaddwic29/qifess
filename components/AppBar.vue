<template>
    <v-app-bar>
        <v-app-bar-title> Faisal </v-app-bar-title>
        <v-spacer />
        <v-btn @click="toggleTheme">
            <v-icon>{{ icon }}</v-icon>
            Change Themes
        </v-btn>
    </v-app-bar>
</template>

<script setup>
import { useTheme } from "vuetify";

const theme = useTheme();
let icon = "ph:moon";
const toggleTheme = () => {
    if (theme.global.current.value.dark) {
        icon = "ph:sun";
        theme.global.name.value = "light";
    } else {
        icon = "ph:moon";
        theme.global.name.value = "dark";
    }
    // theme.global.name.value = theme.global.current.value.dark
    //     ? "light"
    //     : "dark";
};
</script>
