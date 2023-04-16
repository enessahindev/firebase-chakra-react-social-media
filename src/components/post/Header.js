import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useUser } from "hooks/users";
import { formatDistanceToNow } from "date-fns";

export default function Header({ post }) {
  const { uid, date } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="teal.100"
      p="3"
      bg="gray.50"
    >
      <Avatar user={user} size="md" />
      <Box ml="4">
        <Button colorScheme="teal" variant="link">
          {user.username}
        </Button>
        <Text fontSize="sm" color="gray.400">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>
    </Flex>
  );
}
