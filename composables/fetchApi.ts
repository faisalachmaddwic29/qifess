export const fetchApi = async (path: string, options = {}) => {
    const baseURL = "http://165.22.250.125/qifess/api/v1/";
    const token = useCookie("token");

    const response = await useFetch(path, {
        watch: false,
        baseURL: baseURL,
        ...options,
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token.value,
            // ...options?.headers,
        },
    });

    return response;
};
