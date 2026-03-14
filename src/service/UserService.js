import axios from "axios";
import { API, AUTH_REQUEST } from "../utils/axiosConfig";
import { getRefreshToken } from "../utils/helper";
import { KEYCLOAK_TOKEN_ENDPOINT } from "../utils/Url";
export async function refreshToken() {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("client_id", "tland-react");
    params.append("refresh_token", getRefreshToken());

    const res = await axios.post(
        KEYCLOAK_TOKEN_ENDPOINT,
        params,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );

    if (res.status !== 200) throw new Error("Error fetching");
    return res.data;
}
export async function getUSerProfile() {
    const res = await AUTH_REQUEST.get(`/user-service/api/v1/user/profile`)
    return res.data;
}
export async function updateProfile({ firstName, lastName, email, phoneNumber, taxCode, cid, dob, sex }) {
    const res = await AUTH_REQUEST.put(`/user-service/api/v1/user`, { firstName, lastName, email, phoneNumber, taxCode, cid, dob, sex })
    return res.data;
}
export async function uploadAvt(file) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await AUTH_REQUEST.post(`/user-service/api/v1/user/update-avt`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return res.data;
}

export async function getUserInfo() {
    const res = await AUTH_REQUEST.get(`/user-service/api/v1/user`)
    return res.data;
}
export async function signUp({ username, lastName, firstName, email, password }) {
    const res = await API.post(`/user-service/api/v1/user/sign-up`, { username, lastName, firstName, email, password })
    return res.data;
}