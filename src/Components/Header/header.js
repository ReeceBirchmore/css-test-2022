import { ReactComponent as SearchIcon } from "../../Assets/icons/search-outline.svg";
import { ReactComponent as HamburgerIcon } from "../../Assets/icons/menu-outline.svg";
import "./header.scss";

const Header = () => {
  return (
    <header className="Header">
      <h1>ART GALLERY</h1>
      <span>
        <SearchIcon className="Header--icon" />
        <HamburgerIcon className="Header--icon" />
      </span>
    </header>
  );
};

export default Header;
