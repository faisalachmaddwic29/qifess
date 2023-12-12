<template>
    <v-container
        id="information"
        class="h-100 d-flex flex-column justify-space-between"
        style="overflow: auto"
    >
        <div class="content">
            <div class="item">
                <p class="title">Name :</p>
                <p class="subtitle">Super Admin</p>
            </div>

            <div class="item">
                <p class="title">Auth Role :</p>
                <p class="subtitle">Super Admin</p>
            </div>

            <div class="item">
                <p class="title">Username :</p>
                <p class="subtitle">Super Admin</p>
            </div>

            <div class="item">
                <p class="title">Email :</p>
                <p class="subtitle"></p>
            </div>

            <div class="item">
                <p class="title">Phone Number :</p>
                <p class="subtitle"></p>
            </div>

            <div class="item">
                <p class="title">Address :</p>
                <p class="subtitle">Jl. Pondok Pinang VI</p>
            </div>
        </div>

        <div class="actions">
            <v-checkbox
                style="margin: -6px"
                density="compact"
                label="Receive Notification"
            ></v-checkbox>

            <v-btn class="w-100 bg-info text-capitalize" flat density="default"
                >Edit My Profile</v-btn
            >
            <v-btn
                class="w-100 bg-success text-capitalize"
                flat
                density="default"
                >Change Password</v-btn
            >
            <v-btn
                @click="logout"
                class="w-100 bg-error text-capitalize"
                flat
                density="default"
                >Sign Out</v-btn
            >
        </div>
    </v-container>
</template>

<style scoped>
#information {
    height: calc(100% - 260px) !important;
}
#information .content .item {
    margin-bottom: 0.75rem;
}

#information .content .item .title {
    font-size: 11px;
    font-weight: 700;
    color: #666666;
}

#information .content .item .subtitle {
    font-size: 13px;
}

#information .actions button {
    margin-top: 0.75rem;
}
</style>

<script setup>
const tabsStore = useTabs();
const logout = async () => {
    const tokenCookie = useCookie("token");

    await fetchApi("logout", {
        method: "DELETE",
        body: JSON.stringify({
            session_token: tokenCookie.value,
        }),
    });

    tokenCookie.value = null;

    tabsStore.clearTabs();

    await navigateTo("/login", {
        replace: true,
    });
};
</script>
