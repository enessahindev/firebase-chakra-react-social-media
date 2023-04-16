import { Flex, IconButton } from "@chakra-ui/react";
import { useAuth } from "hooks/auth";
import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaComment,
  FaTrash,
} from "react-icons/fa";
import { useToggleLike, useDeletePost } from "hooks/posts";
import { Link } from "react-router-dom";
import { PROTECTED } from "lib/routes";
import { useComment } from "hooks/comments";

export default function Actions({ post }) {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);

  const configObj = {
    id,
    isLiked,
    uid: user?.id,
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(configObj);
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const {comments, isLoading: commentsLoading } = useComment(id)

  return (
    <Flex p="2">
      <Flex alignItems="center">
        <IconButton
          onClick={toggleLike}
          isLoading={likeLoading || userLoading}
          size="md"
          colorScheme="red"
          variant="ghost"
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          isRound
        />
        {likes.length}
      </Flex>
      <Flex alignItems="center" ml="2">
        <IconButton
          as={Link}
          to={`${PROTECTED}/comments/${id}`}
          isLoading={commentsLoading}
          size="md"
          colorScheme="blue"
          variant="ghost"
          icon={comments?.length === 0 ? <FaRegComment /> : <FaComment />}
        />
        {comments?.length}
      </Flex>
      {!userLoading && user.id === uid && (
        <IconButton
          ml="auto"
          onClick={deletePost}
          isLoading={deleteLoading}
          size="md"
          colorScheme="green"
          variant="ghost"
          icon={<FaTrash />}
        />
      )}
    </Flex>
  );
}
