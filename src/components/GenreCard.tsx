import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import  Genre  from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

interface Props {
  genre: Genre;
 
}
const GenreCard = ({ genre }:Props) => {
  const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s=>s.setGenreId);
   const closeDrawer = useGameQueryStore(s => s.closeDrawer);
  return (

 
    <ListItem key={genre.id} paddingY='5px'>
      <HStack>
        <Image objectFit='cover' boxSize='42px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
        <Button 
        whiteSpace='normal' 
        textAlign='left'
        fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
          onClick={() => {
            setSelectedGenreId(genre.id);
           closeDrawer();
          }
          }
          variant='link'
          fontSize='lg'>
          {genre.name}
        </Button>
      </HStack>
    </ListItem>

  )
}

export default GenreCard