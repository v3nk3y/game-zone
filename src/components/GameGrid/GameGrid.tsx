import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const gameCardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  if (error) return <Text color="red">{error.message}</Text>;
  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
      dataLength={fetchedGamesCount}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          gameCardSkeletons.map((gameCardSkeletons) => (
            <GameCardContainer key={gameCardSkeletons}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {!isLoading &&
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
