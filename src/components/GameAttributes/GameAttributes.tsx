import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../../entities/Game";
import CriticScore from "../CriticScore/CriticScore";
import GameDetailsSection from "../GameDetailsSection/GameDetailsSection";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <GameDetailsSection detailName="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameDetailsSection>
      <GameDetailsSection detailName="Metascore">
        <CriticScore score={game.metacritic} />
      </GameDetailsSection>
      <GameDetailsSection detailName="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameDetailsSection>
      <GameDetailsSection detailName="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameDetailsSection>
    </SimpleGrid>
  );
};

export default GameAttributes;
