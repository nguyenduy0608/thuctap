import { Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = ({
  placeholderSearch,
  onChangeSearch,
  style,
}: {
  placeholderSearch: string;
  onChangeSearch: (search: string) => void;
  style?: React.CSSProperties;
}) => {
  const [search, setSearch] = React.useState("");
  const debouncedSearchTerm = useDebounce(search, 300);

  React.useEffect(() => {
    // if (!debouncedSearchTerm) return;
    onChangeSearch && onChangeSearch(debouncedSearchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <InputStyled
      style={style}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={placeholderSearch}
      prefix={<SearchOutlined />}
      allowClear
    />
  );
};
const InputStyled = styled(Input)`
  min-width: 360px;
`;

export default SearchInput;
