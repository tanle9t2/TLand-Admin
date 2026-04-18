import Keycloak from "keycloak-js";
import { KEYCLOAK_BASE_URL } from "./Url";
import { KEYCLOAK_CLIENT_ID, KEYCLOAK_REALM } from "./constant";

const keycloak = new Keycloak({
    url: KEYCLOAK_BASE_URL,
    realm: KEYCLOAK_REALM,
    clientId: KEYCLOAK_CLIENT_ID,
});

export default keycloak;