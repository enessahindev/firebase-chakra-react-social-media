import { Box } from "@chakra-ui/react";
import { useComment } from "hooks/comments";
import Comment from "./Comment";

export default function CommentList({ post }) {
  const { id } = post;
  const { comments, isLoading } = useComment(id);
  if (isLoading) return "Loading...";

  return (
    <Box>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Box>
  );
}
