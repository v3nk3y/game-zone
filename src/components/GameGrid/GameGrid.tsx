import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const gameCardSkeletons = [1, 2, 3, 4, 5, 6];
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
            <GameCardSkeleton key={gameCardSkeletons} />
          ))}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
