import { Spinner } from "@chakra-ui/react";
import useGameTrailers from "../../hooks/useGameTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailers(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  const firstTrailerLinks = data?.results[0];
  if (!firstTrailerLinks) return null;
  return (
    <video
      src={firstTrailerLinks.data[480]}
      poster={firstTrailerLinks.preview}
      controls
    />
  );
};

export default GameTrailer;
