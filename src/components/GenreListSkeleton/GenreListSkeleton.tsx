import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const dummyGenreList = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <List>
        {dummyGenreList.map((genre) => (
          <ListItem key={genre} paddingY="5px">
            <Skeleton>
              <SkeletonText></SkeletonText>
            </Skeleton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreListSkeleton;
