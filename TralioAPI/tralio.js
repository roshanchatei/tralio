import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL, apiVersion } = publicRuntimeConfig;

async function tralioAPI(method, payload, endpointURL) {
    if (method === "POST" || method === "PUT" || method === "PATCH") {
        const response = await fetch(`${API_URL}/${endpointURL}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "access-token": localStorage.getItem("access_token"),
            },
            body: JSON.stringify(payload),
        });
        return response;
    } else if (method === "GET" || method === "DELETE") {
        const response = await fetch(`${API_URL}/${endpointURL}`, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "access-token": localStorage.getItem("access-token"),
            },
        });
        return response;
    }
}

async function verifyOtpAndRegisterUser(payload) {
    const url = `api/${apiVersion}/users/register`;
    const register = await tralioAPI("POST", payload, url);
    return register;
}

async function loginUser(payload) {
    const url = `api/${apiVersion}/users/login`;
    const login = await tralioAPI("POST", payload, url);
    return login;
}

async function uploadBlog(payload) {
    const url = `api/${apiVersion}/posts`;
    const blog = await tralioAPI("POST", payload, url);
    return blog;
}

async function test() {
    const testResult = await tralioAPI("GET", null, "");
    return testResult;
}

async function dbStatus() {
    const url = `api/${apiVersion}/dbstatus`;
    const status = await tralioAPI("GET", null, url);
    return status;
}

async function sendOtp(query) {
    const url = `api/${apiVersion}/emails/send-otp?${query}`;
    const otp = await tralioAPI("GET", null, url);
    return otp;
}

async function userPortfolio(){
        const url = `api/${apiVersion}/`;
        const portfolioDetails = await tralioAPI("POST", payload, url);
        return portfolioDetails;
}
export default tralioAPI;
export { verifyOtpAndRegisterUser, sendOtp, loginUser, uploadBlog, test, dbStatus, userPortfolio };
