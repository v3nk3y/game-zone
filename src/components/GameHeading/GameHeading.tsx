import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);
  const heading = `${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
