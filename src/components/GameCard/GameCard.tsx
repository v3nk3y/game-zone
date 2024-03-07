import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";
import getCroppedImage from "../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
