import { Box } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 4) return null;

  const emojiMap: { [key: number]: string } = {
    4: "🔥",
    5: "🔥🔥",
  };
  return <Box>{emojiMap[rating]}</Box>;
};

export default Emoji;
