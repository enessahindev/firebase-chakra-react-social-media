import { Box, Button, Container, HStack, Heading, Textarea } from "@chakra-ui/react";
import PostsList from "components/post/PostsLists";
import { useAuth } from "hooks/auth";
import useAddPosts, { usePosts } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPosts();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }
  return (
    <Box maxW="600px" mx="auto" py="10">
      <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
          <Heading size="lg">New Post</Heading>
          <Textarea
            as={TextareaAutosize}
            placeholder="What you thinking?"
            minRows={3}
            resize="none"
            mt="5"
            {...register("text", { required: true })}
          />
          <Button
            colorScheme="red"
            type="submit"
            isLoading={authLoading || addingPost}
            loadingText="Loading.."
          >
            Post
          </Button>
        </HStack>
      </form>
    </Box>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";
  
  return (
    <Container>
      <NewPost />
      <PostsList posts={posts} />
    </Container>
  );
}
