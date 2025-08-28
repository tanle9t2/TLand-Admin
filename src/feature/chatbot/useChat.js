import { useMutation } from "@tanstack/react-query";
import { chatWithAI } from "../../service/ChatbotService";

export default function useChat() {
    const { isPending, mutate: createChat } = useMutation({
        mutationFn: ({ input, messages }) => chatWithAI({ input, messages })
    })

    return { isPending, createChat }
}