import { Button, HStack, Image, ListItem, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreCard = ({ genre, onSelectGenre, selectedGenre }: Props) => {
  return (
    <ListItem key={genre.id} paddingY='5px'>
      <HStack>
        <Image boxSize='42px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
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