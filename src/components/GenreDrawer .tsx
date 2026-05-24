// components/GenreDrawer.tsx
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
 
} from "@chakra-ui/react";
import GenreList from "./GenreList";
import { FaHamburger } from "react-icons/fa";
import useGameQueryStore from "../store";

const GenreDrawer = () => {
   const isOpen = useGameQueryStore(s => s.isDrawerOpen);
  const onOpen = useGameQueryStore(s => s.openDrawer);
  const onClose = useGameQueryStore(s => s.closeDrawer);

  return (
    <>
      <Button leftIcon={<FaHamburger />} onClick={onOpen} >
        Genres
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>
          <DrawerBody>
            <GenreList  />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenreDrawer;