import "./NavToggle.css";
const NavToggle = ({ open, openMenu }) => {
  return (
    <button class={`nav__open-btn ${open ? "active" : ""}`} onClick={openMenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavToggle;
