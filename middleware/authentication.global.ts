export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path !== "/login" && to.path !== "/forget-password") {
        if (!useCookie("token").value) {
            return navigateTo("/login");
        } 
    }
});

