
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";


interface Props{
 gameQuery:GameQuery;
}
const GameGrid = ({gameQuery}:Props) => {

  const { data, error, isloading } = useGames(gameQuery);
  const skeletons: number[] = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13];

  return (
    <>
      {error && <Text color='red'>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
        {isloading && skeletons.map(skelton =>
          <GameCardContainer key={skelton}>
            <GameCardSkeleton />
          </GameCardContainer>)}
        {!isloading && data.map(game =>
           <GameCardContainer key={game.id}>
             <GameCard game={game}  />
           </GameCardContainer>

          )}
      </SimpleGrid>

    </>
  )
}

export default GameGrid