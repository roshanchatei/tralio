import Post from "../../components/Post/Post";
import { Box } from "@mui/material";
function PostPage(props) {
  const { posts } = props;

  const createPost = (post,index) => {
      // console.log(index);
    return (
      <Box width="100%" >
        <Post key={post._id} title={post.title} content={post.content} />
      </Box>
    );
  };
  return (
    <Box>
      {posts.map(createPost)}
    </Box>
  ); 
}

export default PostPage;
