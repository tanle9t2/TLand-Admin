import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8443/",
    realm: "TLand",
    clientId: "tland-admin",
});

export default keycloak;