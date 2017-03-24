import React, { Component, PropTypes } from 'react';

/**
 * dependencies
 */

import Grid from 'react-bootstrap/lib/Grid';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar>
              <LinkContainer to='/head3/example4'>
                <NavItem>Example4</NavItem>
              </LinkContainer>
              <LinkContainer to='/head3/example5'>
                <NavItem>Example5</NavItem>
              </LinkContainer>
              <LinkContainer to='/head3/example6'>
                <NavItem>Example6</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid className='App'>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default Layout;
