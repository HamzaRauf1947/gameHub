import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";



const GameGrid = () => {

  const { games, error, isloading } = useGames();
  const skeletons: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color='red'>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {isloading && skeletons.map(skelton => <GameCardSkeleton key={skelton} />)}
        {!isloading && games.map(game => <GameCard game={game} key={game.id} />)}
      </SimpleGrid>

    </>
  )
}

export default GameGrid