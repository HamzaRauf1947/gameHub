import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"
import { wrap } from "framer-motion"


const GenreList = () => {
    const {data} = useGenre()
  return (
    <List>
        {data.map(genre=> <ListItem key={genre.id}  paddingY='5px'>
          <HStack>
            <Image boxSize='42px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize='lg' fontWeight='semibold' >{genre.name} </Text>
          </HStack>
          </ListItem>)}
    </List>
  )
}

export default GenreList