import { Link as ChakraLink, HStack, Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch/ColorModeSwitch";
import SearchInput from "../SearchInput/SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <ChakraLink as={ReactRouterLink} to="/">
        <Image src={logo} boxSize="60px" objectFit="cover"></Image>
      </ChakraLink>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
