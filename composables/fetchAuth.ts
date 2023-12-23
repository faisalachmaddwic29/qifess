export const fetchAuth = async (path: string, options = {}) => {
    const baseURL = "http://165.22.250.125/auth/api/";

    const response = await useFetch(path, {
        watch: false,
        baseURL: baseURL,
        ...options,
        headers: {
            Accept: "application/json",
            // ...options?.headers,
        },
    });

    return response;
};
