import axios from "axios"
import i18n from "../../i18n/i18n"

const instance = axios.create({
    baseURL: `http://92.118.114.178/${i18n.language}/api/v1/`
})
instance.interceptors.request.use((config) => {
    const lang = i18n.language;
    config.baseURL = `http://92.118.114.178/${lang}/api/v1/`;
    return config;
});

export default instance;
// import axios from "axios"

// const instance = axios.create({
//     baseURL: "http://localhost:5000/"
// })

// export default instance