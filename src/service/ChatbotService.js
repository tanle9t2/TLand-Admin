import { AUTH_REQUEST } from "../utils/axiosConfig";

export async function chatWithAI({ input, messages }) {
    const response = await AUTH_REQUEST.post("/rag-service/api/v1/chat/", {
        question: input,
        chat_history: messages.map((m) => ({ human: m.human, ai: m.ai }))
    });

    return response.data;
}
