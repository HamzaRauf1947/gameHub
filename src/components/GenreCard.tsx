import { Button, HStack, Image, ListItem, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}
const GenreCard = ({ genre, onSelectGenre, selectedGenreId }: Props) => {
  return (

 
    <ListItem key={genre.id} paddingY='5px'>
      <HStack>
        <Image objectFit='cover' boxSize='42px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
        <Button 
        whiteSpace='normal' 
        textAlign='left'
        fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
          onClick={() => onSelectGenre(genre)}
          variant='link'
          fontSize='lg'>
          {genre.name}
        </Button>
      </HStack>
    </ListItem>

  )
}

export default GenreCard