import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current?.value);
          navigate("/");
        }
      }}
    >
      <InputGroup minWidth="180px">
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="Search Games..."
          variant="filled"
          borderRadius={30}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
