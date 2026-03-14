import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadKnowledge as uploadKnowledgeAPI } from "../../service/KnowledeService";

export default function useUploadKnowledge() {
    const queryClient = useQueryClient()
    const { isPending, mutate: uploadKnowledge } = useMutation({
        mutationFn: ({ file, docType }) => uploadKnowledgeAPI({ file, docType }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["knowledges"],
                exact: false
            })
        }
    })

    return { isPending, uploadKnowledge }
}