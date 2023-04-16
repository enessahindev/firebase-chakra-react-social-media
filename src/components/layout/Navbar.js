import { Button, Flex, Image, Link } from "@chakra-ui/react";
import { DASHBOARD } from "lib/routes";
import { Link as routerLink } from "react-router-dom";
import React from "react";
import { useLogout } from "hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();
  return (
    <Flex
      shadow="sm"
      pos="fixed"
      width="full"
      borderTop="6px solid"
      borderTopColor="blue.300"
      height="16"
      zIndex="3"
      justify="center"
      bg="white"
    >
      <Flex px="4" w="full" align="center" maxW="1200px">
        <Link color="teal" as={routerLink} to={DASHBOARD} fontWeight="bold">
          <Image src="../logo.png" alt="Logo" w="10" h="10" />
        </Link>
        <Button
          ml="auto"
          colorScheme="red"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}
