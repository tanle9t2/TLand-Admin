import useGetPostByStatus from "./useGetPosts"
import MiniSpinner from '../../ui/MiniSpinner';
import EmployeeList from "../admin/components/EmployeeList";
import PostList from "./PostList";
function PostData() {
    const { isLoading, posts, totalElements, size } = useGetPostByStatus()
    if (isLoading) return <MiniSpinner />

    return (
        <PostList isLoading={isLoading} post={posts} size={size} rowCount={totalElements}>

        </PostList>
    )
}

export default PostData
