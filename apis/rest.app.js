import feathers from "@feathersjs/feathers";
import auth from "@feathersjs/authentication-client";
import { CookieStorage } from "cookie-storage";
import rest from "@feathersjs/rest-client";
import Axios from "axios";
import services from "./services.json";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

/**
 * CookieStorage
 * @type {CookieStorage}
 */

export const cookieStorage = new CookieStorage();

const restClient = rest(API_URL);

export const authCookieName = 'access-token';

/**
 * Feathers application
 */

const restApp = feathers();

restApp.configure(restClient.axios(Axios));

restApp.configure(
  auth({
    path: services.authentication,
    cookie: authCookieName,
    storageKey: authCookieName,
    storage: cookieStorage,
  })
);

export default restApp;

export const authentication = restApp.service(services.authentication);
export const userService = restApp.service(services.user);
export const blogService = restApp.service(services.blog);
export const portfolioService = restApp.service(services.portfolio);
export const emailService = restApp.service(services.email);


/**
 *
 * post       - userService.create({data})
 * get one    - userService.get(id , {query: { query to filter}})
 * get all    - userService.find({query: { query to filter}})
 * patch      - userService.patch(id , {data},{query: { query to filter}} )
 * delete     - userService.remove(id,{query: { query to filter}}}
 *
 */
