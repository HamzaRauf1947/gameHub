import { Heading, List } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import { Genre } from "../entities/Genre"
import GenreCard from "./GenreCard"
import GenreListSkeleton from "./GenreListSkeleton"


const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  return (
    <>
      <Heading as='h1' fontSize='2xl' marginBottom={3}>Genre</Heading>
      <List>
        {isLoading && skeltons.map((skl) => <GenreListSkeleton key={skl} />)}
        {data?.results.map(genre => <GenreCard
          key={genre.id}
          genre={genre}
         
        />)}
      </List>
    </>
  )
}

export default GenreList