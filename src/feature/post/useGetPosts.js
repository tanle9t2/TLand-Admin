import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPostByStatus } from "../../service/PostService";
import { useParams, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constant";


function useGetPostByStatus() {
    const { status } = useParams();
    const [searchParams] = useSearchParams();

    const orderParam = JSON.parse(searchParams.get("sort"))?.[0]
    const queryClient = useQueryClient();
    const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 0;
    const size = searchParams.get("pageSize") ? parseInt(searchParams.get("pageSize")) : PAGE_SIZE;
    const kw = JSON.parse(searchParams.get("filter"))?.quickFilterValues?.join(" ") || ""
    const orderBy = orderParam?.field || ""
    const orderDirection = orderParam?.sort || ""

    const { isLoading, data } = useQuery({
        queryKey: ["posts", status, page, kw, size, orderBy, orderDirection],
        queryFn: () => getPostByStatus({ page, status, kw, size, orderBy, orderDirection }),
    });
    const { content: posts = [],
        totalElements,
        totalPages,
        isLast, } = data ?? {};
    if (page + 1 < totalPages) {
        queryClient.prefetchQuery({
            queryKey: ["post", status, page + 1, kw, size, orderBy, orderDirection],
            queryFn: () => getPostByStatus({ page: page + 1, status, kw, size, orderBy, orderDirection }),
        });
    }

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ["post", status, page - 1, kw, size, orderBy, orderDirection],
            queryFn: () => getPostByStatus({ page: page - 1, status, kw, size, orderBy, orderDirection }),
        });

    return { isLoading, posts, page, size, totalElements, totalPages, isLast };
}

export default useGetPostByStatus;
