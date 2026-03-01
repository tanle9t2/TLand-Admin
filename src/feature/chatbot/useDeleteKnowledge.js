import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteKnowledge as deleteKnowledgeAPI } from "../../service/KnowledeService";

export default function useDeleteKnowledge() {
    const queryClient = useQueryClient()
    const { isPending, mutate: deleteKnowledge } = useMutation({
        mutationFn: ({ id }) => deleteKnowledgeAPI(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["knowledges"],
                exact: false
            })
        }
    })

    return { isPending, deleteKnowledge }
}