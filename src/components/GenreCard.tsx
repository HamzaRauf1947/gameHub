import { HStack, Image, ListItem, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url";

interface Props{
    genre:Genre;
}
const GenreCard = ({genre}:Props) => {
  return (
    <ListItem key={genre.id}  paddingY='5px'>
              <HStack>
                <Image boxSize='42px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                <Text fontSize='lg' fontWeight='semibold' >{genre.name} </Text>
              </HStack>
    </ListItem>
  )
}

export default GenreCard