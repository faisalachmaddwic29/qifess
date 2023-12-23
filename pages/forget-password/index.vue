<template>
    <v-sheet class="h-100 w-100 position-relative bg-forget-password">
        <div
            class="position-absolute px-8 py-8 bg-transparent"
            style="
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                min-width: 400px;
            "
        >
            <v-card-title class="text-center mb-5">
                <img
                    height="30"
                    src="@/assets/images/logo-white.png"
                    alt="Logo"
                />
            </v-card-title>

            <div class="mt-3 mx-auto" style="width: 90px; height: 90px">
                <img
                    class="w-100 h-100"
                    src="@/assets/images/user.png"
                    alt="User"
                />
            </div>
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field
                    v-model="email"
                    :readonly="loading"
                    :rules="emailRules"
                    class="mt-4 mb-3"
                    single-line
                    placeholder="Enter your Email"
                    prepend-inner-icon="mdi-account"
                    type="email"
                    clearable
                ></v-text-field>
                <Suspense>
                    <v-btn
                        :disabled="!form"
                        :loading="loading"
                        block
                        color="orange"
                        size="large"
                        type="submit"
                        variant="elevated"
                        class="text-white"
                    >
                        <p class="text-uppercase font-weight-black">
                            Send Password Reset Link
                        </p>
                    </v-btn>
                </Suspense>
            </v-form>

            <div class="mx-auto d-block text-center">
                <NuxtLink to="/login" class="mt-5 d-inline-block">
                    <p
                        class="text-decoration-underline text-center font-weight-bold text-white text-uppercase"
                    >
                        Back To Login Page
                    </p>
                </NuxtLink>

                <p
                    class="mt-5 font-weight-black"
                    style="font-size: 11px; color: white"
                >
                    Qifess ©2022, Version 2.0 [SERVER]
                </p>
            </div>
        </div>
    </v-sheet>
</template>

<style scoped>
.bg-forget-password {
    background-image: url("@/assets/images/bg-forget-password.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>

<script setup>
definePageMeta({
    layout: "blank",
});

const form = ref(false);
const email = ref("admin@site.domain");
const emailRules = [
    (v) => !!v || "Email is required",
    (v) => /.+@.+\..+/.test(v) || "Email must be valid",
];
const loading = ref(false);

const onSubmit = async () => {
    if (!form.value) return;

    loading.value = true;

    const { data, pending, error, refresh } = await fetchAuth("recovery", {
        method: "POST",
        body: JSON.stringify({
            email: email.value,
        }),
    });
    loading.value = false;
    if (data.value) {
        alert(
            data.value.message ??
                "Password reset link has been sent to your email"
        );
    } else if (error.value.statusCode) {
        alert(error.value.data.message);
    }

    // setTimeout(() => {
    //     loading.value = false;
    // }, 1000);
};
</script>
