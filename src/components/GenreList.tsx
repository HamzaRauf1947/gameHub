import { HStack, Image, List, ListItem, Skeleton, Spinner, Text } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import getCroppedImageUrl from "../services/image-url"
import { wrap } from "framer-motion"
import GenreCard from "./GenreCard"
import GenreListSkeleton from "./GenreListSkeleton"

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isloading } = useGenre();
  const skeltons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  return (
    <List>
      {isloading && skeltons.map((skl) => <GenreListSkeleton key={skl} />)}
      {data.map(genre => <GenreCard
        key={genre.id}
        genre={genre}
        onSelectGenre={onSelectGenre}
        selectedGenre={selectedGenre}
      />)}
    </List>
  )
}

export default GenreList