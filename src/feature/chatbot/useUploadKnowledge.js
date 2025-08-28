import { useMutation } from "@tanstack/react-query";
import { uploadKnowledge as uploadKnowledgeAPI } from "../../service/ChatbotService";

export default function useUploadKnowledge() {
    const { isPending, mutate: uploadKnowledge } = useMutation({
        mutationFn: ({ file }) => uploadKnowledgeAPI({ file })
    })

    return { isPending, uploadKnowledge }
}