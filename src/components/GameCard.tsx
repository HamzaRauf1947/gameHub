import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Game } from "../entities/Game"
import PlatformIconList from "./PlatformIconList"
import CrirticScore from "./CrirticScore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"
import { Link } from "react-router-dom"


interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (

    <Card
  overflow="hidden"
  borderRadius="lg"
  transition="all 0.3s ease"
  cursor="pointer"
  _hover={{
    transform: "translateY(-8px) scale(1.02)",
    boxShadow: "2xl",
  }}
>
  <Image
    src={getCroppedImageUrl(game.background_image)}
    transition="transform 0.3s ease"
    _hover={{
      transform: "scale(1.05)",
    }}
  />

  <CardBody>
    <HStack justifyContent="space-between" marginBottom={3}>
      <PlatformIconList
        platforms={game.parent_platforms.map((p) => p.platform)}
      />
      <CrirticScore score={game.metacritic} />
    </HStack>

    <Heading fontSize="2xl">
      <Link to={'/games/'+game.slug}>{game.name} </Link>
      <Emoji rating={game.rating_top} />
    </Heading>
  </CardBody>
</Card>
  )
}

export default GameCard