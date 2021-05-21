import logo from "./../../assets/img/Logo.png";
import { NavbarWrapper } from "./Navbar.styled";
import { Margin, Conatainer } from "./../base/Grid.styled";

export function Navbar() {
  return (
    <NavbarWrapper>
      <Conatainer>
        <Margin mt="36px">
          <img src={logo} alt="logo" />
        </Margin>
      </Conatainer>
    </NavbarWrapper>
  );
}

export function NavbarSpace() {
  return <Margin mt="64px" />;
}
