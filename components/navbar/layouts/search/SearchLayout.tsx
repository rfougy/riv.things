import { Dispatch, SetStateAction } from "react";

import Search from "../../../features/search/Search";
import IconButton from "../../../shared/icon-button/IconButton";

import closeIcon from "../../../../public/assets/icons/close-icon.svg";

import { NavBox } from "../../Navbar.styled";

const SearchLayout: React.FC<{
  setSearchResults: Dispatch<SetStateAction<any[]>>;
  setSearchActivated: Dispatch<SetStateAction<boolean>>;
}> = ({ setSearchResults, setSearchActivated }) => (
  <NavBox>
    <Search setSearchResults={setSearchResults} />
    <IconButton
      src={closeIcon}
      alt="close search button"
      ariaLabel="close search button"
      height="1.25rem"
      width="1.25rem"
      onClick={() => setSearchActivated(false)}
    />
  </NavBox>
);

export default SearchLayout;
