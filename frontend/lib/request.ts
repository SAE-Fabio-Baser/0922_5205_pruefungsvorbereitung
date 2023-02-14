import axiosDefault, { AxiosRequestConfig } from "axios";

const axios = axiosDefault.create({ baseURL: "http://localhost:3000" });

function request<T>(
    uri: string,
    options: AxiosRequestConfig = { method: "get" }
): Promise<T> {
    return new Promise((resolve, reject) => {
        axios(uri, options)
            .then((response) => {
                const { data, success, error } = response.data;
                if (error) {
                    console.error(error);
                    reject(error);
                }

                if (success) {
                    resolve(data);
                }
            })
            .catch(console.error);
    });
}

export default request;
