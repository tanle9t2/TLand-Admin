import Keycloak from "keycloak-js";
import { KEYCLOAK_BASE_URL } from "./Url";
import { KEYCLOAK_CLIENTID, KEYCLOAK_REALM } from "./constant";

const keycloak = new Keycloak({
    url: KEYCLOAK_BASE_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENTID,
});

export default keycloak;