import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  if (children.length < limit) return <Text>{children}</Text>;

  const summarizedText = expanded
    ? children
    : children.substring(0, limit) + "...";

  return (
    <Text>
      {summarizedText}
      <Button
        fontWeight="bold"
        colorScheme="blue"
        marginLeft={1}
        size="xs"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
