import { API, AUTH_REQUEST } from "../utils/axiosConfig";

export async function getPostByStatus({ page, size, status, kw, orderBy, orderDirection }) {
    const res = await AUTH_REQUEST.get('/post-service/api/v1/post/admin', {
        params: { page, size, status, kw, orderBy, orderDirection }
    });
    return res.data;
}

export async function acceptPost({ postId }) {
    const res = await AUTH_REQUEST.post(`/post-service/api/v1/post/${postId}/accept`);
    return res.data;
}
export async function rejectPost({ postId }) {
    const res = await AUTH_REQUEST.delete(`/post-service/api/v1/post/${postId}/reject`);
    return res.data;
}
