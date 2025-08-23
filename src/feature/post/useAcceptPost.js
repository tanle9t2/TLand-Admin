import { useMutation, useQueryClient } from "@tanstack/react-query";
import { acceptPost as acceptPostAPI } from "../../service/PostService"
export default function useAcceptPost() {
    const queryClient = useQueryClient()
    const { isPending, mutate: acceptPost } = useMutation({
        mutationFn: ({ postId }) => acceptPostAPI({ postId }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
                exact: false
            })
        }
    })

    return { isPending, acceptPost }
}