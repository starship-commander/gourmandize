import React, {useState} from "react";
import { Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  return(
    <>
      <Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} style={{zIndex:999}}>
          <DropdownToggle caret className="dropdown" style={{fontSize:'0.8rem'}}>
            Menu
          </DropdownToggle>
          <DropdownMenu className="drop-options">
            {logged_in && (
              <DropdownItem href='/about'>About Us</DropdownItem>
            )}
            {!logged_in && (
              <DropdownItem href='/about'>About Us</DropdownItem>
            )}
            {logged_in && (
              <DropdownItem href="/restaurantindex">Restaurants</DropdownItem>
            )}
            {!logged_in && (
              <DropdownItem href="/restaurantindex">Restaurants</DropdownItem>
            )}
            {logged_in && (
              <DropdownItem href="/myposts">My Posts</DropdownItem>
            )}
            {logged_in && (
              <DropdownItem href={sign_out_route}>Sign Out</DropdownItem>
            )}
            {!logged_in && (
              <DropdownItem href={sign_in_route}>Sign In</DropdownItem>
            )}
            {!logged_in && (
              <DropdownItem href={new_user_route}>Sign Up</DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </>
  )
}
  
  export default Navigation