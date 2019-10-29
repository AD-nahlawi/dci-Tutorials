import React, { Component ,useState } from 'react'
import {Link} from 'react-router-dom';
import {    Collapse,
            Navbar,
            NavbarToggler,
            NavbarBrand,
            Nav,
            NavItem,
            NavLink,
            UncontrolledDropdown,
            DropdownToggle,
            DropdownMenu,
            DropdownItem
        } from 'reactstrap';

export default class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpen:false
        }
    }
    toggle = () => { 
        this.setState({isOpen: !this.state.isOpen })
    }
    
    render() {
        return (
            <div>
                <Navbar color = 'dark'>
                    <NavbarBrand href = '/' >NavbarBrand</NavbarBrand> {/*  <a></a> */}
                    <NavbarToggler onClick = {this.toggle} />      {/* <button></button> */}

                    <Collapse navbar isOpen = {this.state.isOpen/* true */}>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href = '/about' /* tag = {Link} */ to = '/about'>About</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>

                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>

                                <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
