import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";
import getCroppedImage from "../../services/image-url";
import Emoji from "../Emoji/Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <HStack>
            <CriticScore score={game.metacritic} />
            <Emoji rating={game.rating_top} />
          </HStack>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
