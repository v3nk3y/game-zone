import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
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
    <ChakraLink as={ReactRouterLink} to={"/games/" + game.slug}>
      <Card>
        <Image src={getCroppedImage(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </ChakraLink>
  );
};

export default GameCard;
