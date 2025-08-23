import { createContext, useState, useEffect, useContext } from "react";
import keycloak from "../utils/keycloak";
import FullPageSpinner from "../ui/FullPageSpinner";

import { setLocalStorageRefreshToken, setLocalStorageToken } from "../utils/helper";
import useGetUserProfile from "../feature/auth/useGetUserProfile";


const AuthContext = createContext();

function AuthProvider({ children }) {
    const [initialized, setInitialized] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const [profile, setProfile] = useState(null)
    const { isLoading, userProfile } = useGetUserProfile(authenticated)
    useEffect(() => {
        keycloak
            .init({
                onLoad: "check-sso",
                silentCheckSsoRedirectUri:
                    window.location.origin + "/silent-check-sso.html"
            })
            .then((auth) => {
                if (!keycloak.hasRealmRole("ROLE_ADMIN")) {
                    keycloak.logout();
                }

                if (auth) {
                    setLocalStorageToken(keycloak.token)
                    setLocalStorageRefreshToken(keycloak.refreshToken)
                }

                setAuthenticated(auth);
                setInitialized(true);
            });
    }, []);

    useEffect(() => {
        if (!isLoading && userProfile) {
            setProfile(userProfile)
        }
    }, [isLoading, userProfile])

    if (isLoading || !initialized) return <FullPageSpinner />

    return (
        <AuthContext.Provider
            value={{
                keycloak,
                authenticated,
                initialized,
                profile,
                login: () => keycloak.login(),
                logout: () => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("refreshToken");
                    keycloak.logout();
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined)
        throw new Error("AuthContext was used outside AuthProvider");
    return context;
}

export { AuthProvider, useAuth };
