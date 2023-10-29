import { Link } from "react-router-dom"
import styled from "styled-components"
import Profile from "./Profile"

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
      <Profile username={username} />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  background: white;
  display: flex;
  align-items: center;
  padding-right: 50px;
  /* justify-content: center; */
  /* gap: 50px;
  height: auto; */

  /* .admin-button {
    background: #6e0eb3;
  } */

  /* .profile {
    background: blue;
  }

  .picture {
    background: pink;
  } */
`
