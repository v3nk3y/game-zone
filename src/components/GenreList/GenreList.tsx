import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import getCroppedImage from "../../services/image-url";
import GenreListSkeleton from "../GenreListSkeleton/GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return;
  return (
    <List>
      {isLoading && <GenreListSkeleton />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImage(genre.image_background)}
            ></Image>
            <Button
              onClick={() => {
                onSelectGenre(genre);
              }}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              variant="link"
              fontSize="lg"
              cursor="pointer"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
