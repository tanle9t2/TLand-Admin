import useGetPostByStatus from "./useGetPosts"
import MiniSpinner from '../../ui/MiniSpinner';
import EmployeeList from "../admin/components/EmployeeList";
import PostListRequest from "./PostListRequest";
import { useParams } from "react-router-dom";
import PostListOverview from "./PostListOverview";
function PostData() {
    const { isLoading, posts, totalElements, size } = useGetPostByStatus()
    const { status } = useParams()
    if (isLoading) return <MiniSpinner />
    return (
        status ? <PostListRequest isLoading={isLoading} post={posts} size={size} rowCount={totalElements} /> :
            <PostListOverview isLoading={isLoading} post={posts} size={size} rowCount={totalElements} />
    )
}

export default PostData
