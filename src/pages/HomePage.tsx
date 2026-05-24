import { Grid, Show, GridItem, HStack, SimpleGrid } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import GenreDrawer from '../components/GenreDrawer '

const HomePage = () => {
  return (
    <Grid paddingBottom={9} templateAreas={{
      base: ` "main"`,
      lg: ` "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      
      <Show above="lg">
        <GridItem area='aside' paddingX={4} >
          <GenreList />
        </GridItem>
      </Show>
      

      <GridItem area='main' paddingX={{ base: 0, md: 4 }} paddingY={4}>
  <GameHeading />

  
  <Show below="lg">
    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3} marginBottom={5}>
      <GenreDrawer />
      <PlatformSelector />
      <SortSelector />
    </SimpleGrid>
  </Show>

  <Show above="lg">
    <HStack spacing={5} marginBottom={5}>
      <PlatformSelector />
      <SortSelector />
    </HStack>
  </Show>

  <GameGrid />
</GridItem>

    </Grid>
  )
}

export default HomePage;