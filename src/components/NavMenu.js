import React from 'react';
import { Menu, Container, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const NavMenu = () => {
  return (
    <Menu size="large" inverted stackable color="green">
      <Container >
        <Menu.Item header>
          <Link to="/"><Image size='tiny' src={logo} style={{ marginRight: '1.5em' }} /></Link>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='link1' >
            <Link to="/ComisionDirectiva"><Header inverted as='h4' content='COMISIÓN DIRECTIVA' /></Link>
          </Menu.Item>
          <Menu.Item name='link2' >
            <Link to="/Galeria"><Header inverted as='h4' content='GALERÍA' /></Link>
          </Menu.Item>
          <Menu.Item name='link3' >
            <Link to="/QuieroColaborar"><Header inverted as='h4' content='QUIERO COLABORAR' /></Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default NavMenu;
