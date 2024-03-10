import {
  AspectRatio,
  Card,
  CardBody,
  Link as ChakraLink,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Game from "../../entities/Game";
import getCroppedImage from "../../services/image-url";
import CriticScore from "../CriticScore/CriticScore";
import Emoji from "../Emoji/Emoji";
import PlatformIconList from "../PlatformIconList/PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={"/games/" + game.slug}
      _hover={{ textDecoration: "none" }}
    >
      <Card>
        <AspectRatio ratio={4 / 3}>
          <Image
            src={getCroppedImage(game.background_image)}
            objectFit="cover"
          ></Image>
        </AspectRatio>
        <CardBody padding={4}>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="large" marginBottom={1}>
            {game.name}
          </Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </ChakraLink>
  );
};

export default GameCard;
