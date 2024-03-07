import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImage from "../../services/image-url";
import GenreListSkeleton from "../GenreListSkeleton/GenreListSkeleton";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
