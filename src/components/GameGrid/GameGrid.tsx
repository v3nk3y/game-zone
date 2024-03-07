import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import { Genre } from "../../hooks/useGenres";

interface Props {
  slectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ slectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(slectedGenre, selectedPlatform);
  const gameCardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing="10px"
        padding="10px"
      >
        {isLoading &&
          gameCardSkeletons.map((gameCardSkeletons) => (
            <GameCardContainer key={gameCardSkeletons}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
