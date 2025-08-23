import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rejectPost as rejectPostAPI } from "../../service/PostService"
export default function useRejectPost() {
    const queryClient = useQueryClient()
    const { isPending, mutate: rejectPost } = useMutation({
        mutationFn: ({ postId }) => rejectPostAPI({ postId }),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts"],
                exact: false
            })
        }
    })

    return { isPending, rejectPost }
}