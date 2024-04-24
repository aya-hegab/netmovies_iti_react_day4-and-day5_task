import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  //   baseURL: "https://api.themoviedb.org/3/movie/",
});

// axiosInstance.interceptors.request.use(
//   function (config) {
//     config.headers["Authorization"] = "ACCESS_TOKEN 12364asd4a5sd3a2sd";
//     config.headers["Accept-language"] = "ar";
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
