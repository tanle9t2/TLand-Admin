import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getKnowledges } from "../../service/KnowledeService";
import { useSearchParams } from "react-router-dom";
import { PAGE, PAGE_SIZE } from "../../utils/constant";

function useGetKnowledges() {

    const [searchParams] = useSearchParams();
    const orderParam = JSON.parse(searchParams.get("sort"))?.[0]
    const queryClient = useQueryClient();
    const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : PAGE;
    const size = searchParams.get("pageSize") ? parseInt(searchParams.get("pageSize")) : PAGE_SIZE;
    const sortBy = orderParam?.field || ""
    const orderBy = orderParam?.sort || ""

    const { isLoading, data } = useQuery({
        queryKey: ["knowledges", page, size, sortBy, orderBy],
        queryFn: () => getKnowledges({ page, size, sortBy, orderBy }),
    });
    const { content: knowledges = [],
        totalElements,
        totalPages,
        isLast, } = data ?? {};
    if (page + 1 < totalPages) {
        queryClient.prefetchQuery({
            queryKey: ["post", page + 1, size, sortBy, orderBy],
            queryFn: () => getKnowledges({ page: page + 1, size, sortBy, orderBy }),
        });
    }

    if (page > 1)
        queryClient.prefetchQuery({
            queryKey: ["post", page - 1, size, sortBy, orderBy],
            queryFn: () => getKnowledges({ page: page - 1, size, sortBy, orderBy }),
        });




    return { isLoading, knowledges, page, size, totalElements, totalPages, isLast };
}

export default useGetKnowledges;
