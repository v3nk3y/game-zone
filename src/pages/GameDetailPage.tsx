import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText/ExpandableText";
import GameDetailsSection from "../components/GameDetailsSection/GameDetailsSection";
import useGame from "../hooks/useGame";
import CriticScore from "../components/CriticScore/CriticScore";
import GameAttributes from "../components/GameAttributes/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Box padding={5}>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>
    </>
  );
};

export default GameDetailPage;
