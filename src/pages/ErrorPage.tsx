import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oopsss....</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Sorry! This page does not exist :("
            : "Sorry! An unexpected error occured :("}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
