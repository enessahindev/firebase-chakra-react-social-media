import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { DASHBOARD, REGISTER } from "lib/routes";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLogin } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "utils/form-validate";

const Login = () => {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });
  }

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
        <Image
          boxSize="128px"
          src="/logo.png"
          alt="Developer Social Media App"
          marginLeft="90px"
        />
        <Heading mb="4" size="lg" textAlign="center">
          {"<Log/in>"}
        </Heading>
        <Text fontSize="sm" mb="3" textAlign="center">
          Welcome to Application
        </Text>
        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={errors.email} py="2">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="mail@email.com"
              {...register("email", emailValidate)}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password} py="2">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="••••"
              {...register("password", passwordValidate)}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt="4"
            type="submit"
            colorScheme="messenger"
            size="md"
            w="full"
            isLoading={isLoading}
            loadingText="Logging in"
          >
            Login
          </Button>
        </form>
        <Text fontSize="medium" align="center" mt="3">
          Don't have an account?{" "}
          <Link
            as={RouterLink}
            to={REGISTER}
            color="messenger.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "messenger.100/5" }}
          >
            Register
          </Link>{" "}
          instead!
        </Text>
      </Box>
    </Center>
  );
};

export default Login;
