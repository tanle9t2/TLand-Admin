import { AUTH_REQUEST } from "../utils/axiosConfig";

export async function uploadKnowledge({ file }) {
    const formData = new FormData();
    formData.append('file', file);

    const res = await AUTH_REQUEST.post(`/rag-service/api/v1/chat/feed`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return res.data;
}

export async function getKnowledges({ page, size, sortBy, orderBy }) {
    const res = await AUTH_REQUEST.get(`/rag-service/api/v1/knowledge/`, {
        params: {
            page,
            size,
            sortBy,
            orderBy
        }
    });
    return res.data;
}

export async function getKnowledgeById(fileId) {
    const res = await AUTH_REQUEST.get(
        `/rag-service/api/v1/knowledge/${fileId}`
    );
    return res.data;
}

export async function updateKnowledge({
    fileId,
    filename,
    total_chunks,
    status
}) {
    const res = await AUTH_REQUEST.put(
        `/rag-service/api/v1/knowledge/${fileId}`,
        null,
        {
            params: {
                filename,
                total_chunks,
                status
            }
        }
    );

    return res.data;
}


export async function deleteKnowledge(fileId) {
    const res = await AUTH_REQUEST.delete(
        `/rag-service/api/v1/knowledge/${fileId}`
    );

    return res.data;
}