import { Link as ChakraLink, HStack, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import game_logo from "../../assets/game_logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

const NavBar = () => {
  return (
    <HStack padding={5}>
      <ChakraLink as={ReactRouterLink} to="/">
        <Image
          src={game_logo}
          boxSize="40px"
          minHeight="40px"
          minWidth="40px"
          borderRadius={10}
          boxShadow="0 3px 6px rgba(0, 0, 0, 0.2)"
        ></Image>
      </ChakraLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
