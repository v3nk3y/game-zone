import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  detailName: string;
  children: ReactNode;
}

const GameDetailsSection = ({ detailName, children }: Props) => {
  return (
    <Box my={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {detailName}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default GameDetailsSection;
