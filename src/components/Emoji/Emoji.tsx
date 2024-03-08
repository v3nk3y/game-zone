import { Box } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: string } = {
    3: "⭐️",
    4: "⭐️⭐️",
    5: "⭐️⭐️⭐️",
  };
  return <Box whiteSpace="nowrap">{emojiMap[rating]}</Box>;
};

export default Emoji;
