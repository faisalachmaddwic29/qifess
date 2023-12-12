<template>
    <v-sheet class="h-100 w-100 position-relative bg-login">
        <v-card
            class="position-absolute px-8 py-8"
            style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
            min-width="400"
        >
            <v-card-title class="text-center mb-5">
                <img height="30" src="@/assets/images/logo.png" alt="Logo" />
            </v-card-title>
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field
                    v-model="email"
                    :readonly="loading"
                    :rules="emailRules"
                    class="mb-3"
                    single-line
                    placeholder="Enter your Email"
                    prepend-inner-icon="mdi-account"
                    type="email"
                    clearable
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    class="mb-3"
                    single-line
                    placeholder="Enter your password"
                    prepend-inner-icon="mdi-lock"
                    :readonly="loading"
                    :rules="passwordRules"
                    :append-inner-icon="
                        showPassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                    :type="showPassword ? 'text' : 'password'"
                    @click:append-inner="() => (showPassword = !showPassword)"
                ></v-text-field>

                <Suspense>
                    <v-btn
                        :disabled="!form"
                        :loading="loading"
                        block
                        color="primary"
                        size="large"
                        type="submit"
                        variant="elevated"
                    >
                        <p class="text-uppercase font-weight-black">Sign IN</p>
                    </v-btn>
                </Suspense>
            </v-form>

            <div class="mx-auto d-block text-center">
                <NuxtLink to="/forget-password" class="mt-5 d-inline-block">
                    <span
                        class="text-decoration-underline text-center font-weight-bold"
                    >
                        Forget Password
                    </span>
                </NuxtLink>
            </div>
        </v-card>
    </v-sheet>
</template>

<style scoped>
.bg-login {
    background-image: url("@/assets/images/bg-login.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>

<script setup>
definePageMeta({
    layout: "blank",
});

const showPassword = ref(false);
const passwordRules = [(v) => !!v || "Password is required"];
const emailRules = [
    (v) => !!v || "Email is required",
    (v) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const form = ref(false);
const email = ref("admin@site.domain");
const password = ref("qualita2023!");
const loading = ref(false);

const onSubmit = async () => {
    if (!form.value) return;

    loading.value = true;

    const { data, pending, error, refresh } = await fetchApi("login", {
        method: "POST",
        body: JSON.stringify({
            email: email.value,
            password: password.value,
        }),
    });
    loading.value = false;
    if (data.value) {
        const { token } = data.value.data;
        useCookie("token").value = token;
        await navigateTo("/", {
            replace: true,
        });
    } else if (error.value.statusCode) {
        alert(error.value.data.message);
    }
};
</script>
