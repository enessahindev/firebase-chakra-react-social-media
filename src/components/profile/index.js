import {
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Avatar from "./Avatar";
import PostsList from "components/post/PostsLists";
import { useParams } from "react-router-dom";
import { usePosts } from "hooks/posts";
import { useUser } from "hooks/users";
import { format } from "date-fns";
import { MdAddAPhoto } from "react-icons/md";
import EditProfile from "./EditProfile";
import { useAuth } from "hooks/auth";

export default function Profile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { posts, isLoading: postsLoading } = usePosts(id);
  const { user: authUser, isLoading: authLoading } = useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, isLoading: userLoading } = useUser(id);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (userLoading) return "Loading...";

  return (
    <Stack spacing="5">
      <Flex p={["4", "6"]} pos="relative" align="center">
        <Avatar size="2xl" user={user} />

        {!authLoading && authUser.id === user.id && (
          <Button
            pos="absolute"
            mb="2"
            top="6"
            right="6"
            colorScheme="blue"
            onClick={onOpen}
            leftIcon={<MdAddAPhoto />}
          >
            {" "}
            Change Avatar
          </Button>
        )}

        <Stack ml="10">
          <Text fontSize="2xl">{user.username}</Text>
          <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Posts: {posts.length}
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Likes: todo!
            </Text>
            <Text color="gray.700" fontSize={["sm", "lg"]}>
              Joined: {format(user.date, "MMMM YYY")}
            </Text>
          </HStack>
        </Stack>

        <EditProfile isOpen={isOpen} onClose={onClose} />
      </Flex>
      <Divider />
      {postsLoading ? (
        <Text> Post are Loading...</Text>
      ) : (
        <PostsList posts={posts} />
      )}
    </Stack>
  );
}
