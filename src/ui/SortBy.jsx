import { useSearchParams } from "react-router-dom";

import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // get the sortBy or first element in sortBy options, in case user refreshes the page
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortBy;
