export default defineNuxtRouteMiddleware((to, from) => {
    const name = to.name?.toString();
    const cookie = useCookie("tab");
    cookie.value = JSON.stringify({
        path: to.path,
        name: name!.charAt(0).toUpperCase() + name?.slice(1),
        value: to.name,
    });
});
