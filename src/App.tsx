import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGame"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder:string;
  searchText:string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid paddingBottom={9} templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav' >
        <Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})} />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' paddingX={4} >
          <GenreList
            onSelectGenre={(genre) => setGameQuery({...gameQuery,genre})}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area='main' padding={4}>
        <GameHeading gameQuery={gameQuery}/>
        <HStack spacing={5} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})} />
            <SortSelector
             onSelectOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}
             sortOrder={gameQuery.sortOrder}
             
             />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

    </Grid>
  )
}

export default App
