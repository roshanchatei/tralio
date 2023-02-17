const localAPI = "http://localhost:8000";
const prodAPI = "http://14.139.221.186:8080/";

module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    API_URL: prodAPI,
    apiVersion: "v1",
  },
};
