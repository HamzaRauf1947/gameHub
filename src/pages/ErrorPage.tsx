import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Box minH="100vh" bg="#0b0b0f" color="white">
      <Navbar />

      {/* Center Content */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="calc(100vh - 80px)"
        px={4}
      >
        <Box
          maxW="500px"
          w="full"
          p={10}
          textAlign="center"
          borderRadius="2xl"
          bg="rgba(255,255,255,0.04)"
          backdropFilter="blur(12px)"
          border="1px solid rgba(255,255,255,0.08)"
          boxShadow="0 0 40px rgba(0,0,0,0.6)"
        >
          <VStack spacing={5}>
            {/* Big 404 */}
            <Heading
              fontSize="6xl"
              bgGradient="linear(to-r, #ffffff, #9ca3af)"
              bgClip="text"
              letterSpacing="wider"
            >
              404
            </Heading>

            <Heading fontSize="2xl">Oops! Page not found</Heading>

            <Text color="gray.400">
              {isRouteErrorResponse(error)
                ? "This page does not exist or has been moved."
                : "An unexpected error occurred while loading this page."}
            </Text>

            {/* Action Button */}
            <Button
              mt={4}
              bg="#22c55e"
              color="black"
              _hover={{ bg: "#16a34a" }}
              onClick={() => navigate("/")}
            >
              Go Back Home
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorPage;