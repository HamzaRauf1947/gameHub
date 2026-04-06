import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenre"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGame"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid paddingBottom={9} templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base:'1fr',
      lg:'250px 1fr'
    }}
    >
      <GridItem area='nav' >
      <Navbar/>
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' paddingX={4} >
          <GenreList
           onSelectGenre={(genre)=> setSelectedGenre(genre)}
           selectedGenre={selectedGenre}
           />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(Platform)=>setSelectedPlatform(Platform)} />
        <GameGrid  selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>

    </Grid>
  )
}

export default App
