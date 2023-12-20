export default defineNuxtRouteMiddleware((to, from) => {
    const cookieTab = useCookie("tab");
    if (to.path == "/") {
        // cookieTab.value = "";
        return;
    } else if (to.path !== "/login" && to.path !== "/forget-password") {

        /**
         * Jika Pathnya menjadi /home/create atau lebih dalam maka yang di set di cookie itu parentnya
         */
        const name = to.path.split("/")[1];
        cookieTab.value = JSON.stringify({
            path: "/" +name,
            name: name ?? "".charAt(0).toUpperCase() + name ?? "".slice(1),
            value: name.replace('/', ''),
        });
    }
});
