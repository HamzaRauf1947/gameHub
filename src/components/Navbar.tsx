import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/game.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack width="100%"   padding="10px" spacing={{ base: 2, md: 4 }}>
      <Link to="/">
        <Image
          src={logo}
          boxSize={{ base: "45px", md: "60px" }}
          objectFit="cover"
           flexShrink={0}
        />
      </Link>

      
        <SearchInput />
     
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
