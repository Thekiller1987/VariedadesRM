import React, { useState, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Offcanvas, Button, NavDropdown, Container } from 'react-bootstrap';
import { FaRightFromBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function Header({ Rol }) {

  const cerrarSesion = () => {
    localStorage.removeItem('userRol');
  };


  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (

        <div>
          {Rol === 'administrador' && (
        <div>
        {/* Navbar principal */}
        <Navbar className="navbar-color" variant="dark" expand="md" fixed='top'>
          <Container>

          <Navbar.Brand href="#home" className="mr-auto">
          <img
            src={process.env.PUBLIC_URL + '/Logo.png'}
            alt="Virlón"
            style={{ marginLeft: '-20px', maxHeight: '50px', maxWidth: '150px' }}
            />
              <span style={{ marginLeft: '10px', marginRight: '10px', fontSize: '1.5rem', color: 'white' }}>Variedades RM </span>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ display: 'none' }}
              className="d-sm-none d-xs-none"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">



                <NavDropdown title="Clientes" id="clientes">
                  <NavDropdown.Item>
                    <Link to="/cliente" className="link-unstyled">Clientes</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/clienteList" className="link-unstyled"> ver Clientes</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Categoría" id="categoría">
                  <NavDropdown.Item>
                    <Link to="/categoria" className="link-unstyled">Registrar Categoría</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/categoriaList" className="link-unstyled">mostrar Categorías</Link>
                  </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="Producto" id="producto">
                  <NavDropdown.Item>
                    <Link to="/producto" className="link-unstyled">Registrar Productos</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/productoList" className="link-unstyled">ver Productos</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link>
                    <Link to="/galeria" className="link-unstyled">Galería</Link>
                </Nav.Link>

               
                <NavDropdown title="Venta" id="venta">
                  <NavDropdown.Item>
                    <Link to="/venta" className="link-unstyled">Registrar Venta</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/ventaList" className="link-unstyled">Listar Ventas</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link>
                    <Link to="/estadisticas" className="link-unstyled">Estadísticas</Link>
                </Nav.Link>

                <Nav.Link onClick={cerrarSesion}>
                    <Link to="/" className="link-unstyled"><FaRightFromBracket /></Link>
                </Nav.Link>


              </Nav>
            </Navbar.Collapse>
            <Button
              variant="outline-light"
              onClick={toggleMenu}
              className="d-md-none d-block"
              aria-controls="basic-navbar-nav"
              aria-expanded={showMenu ? 'true' : 'false'}
            >
              Menú
            </Button>
          </Container>
        </Navbar>


        {/* Menú lateral (Offcanvas) */}
        <Offcanvas show={showMenu} onHide={toggleMenu} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">

              <NavDropdown title="Clientes" id="clientes">
                <NavDropdown.Item>
                  <Link to="/cliente" className="link-unstyled">Registrar Cliente</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/clienteList" className="link-unstyled">Listar Clientes</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Producto" id="producto">
                <NavDropdown.Item>
                  <Link to="/producto" className="link-unstyled">Registrar Productos</Link>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <Link to="/productoList" className="link-unstyled">Listar Productos</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                    <Link to="/galeria" className="link-unstyled">Galería</Link>
              </Nav.Link>

              <NavDropdown title="Categoría" id="categoría">
                <NavDropdown.Item>
                  <Link to="/categoria" className="link-unstyled">Registrar Categoría</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/categoriaList" className="link-unstyled">Listar Categorías</Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Venta" id="venta">
                  <NavDropdown.Item>
                    <Link to="/venta" className="link-unstyled">Registrar Venta</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/ventaList" className="link-unstyled">Listar Ventas</Link>
                  </NavDropdown.Item>
                </NavDropdown>

              <Nav.Link>
                    <Link to="/estadisticas" className="link-unstyled">Estadísticas</Link>
              </Nav.Link>

              <Nav.Link>
                    <Link to="/" className="link-unstyled"><FaRightFromBracket /></Link>
              </Nav.Link>

            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      )}

      {Rol === 'vendedor' && (
    <div>
        {/* Navbar principal */}
        <Navbar className="navbar-color" variant="dark" expand="md" fixed='top'>
          <Container>

          <Navbar.Brand href="#home" className="ml-auto">
          <img
            src={process.env.PUBLIC_URL + '/logo.png'}
            alt="Variecades Juliesk"
            style={{ marginLeft: '-20px', maxHeight: '50px', maxWidth: '150px' }}
            />
              <span style={{ marginLeft: '10px', marginRight: '10px', fontSize: '1.5rem', color: 'white' }}>Variedades juliesk</span>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ display: 'none' }}
              className="d-sm-none d-xs-none"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">

              <NavDropdown title="Venta" id="venta">
                  <NavDropdown.Item>
                    <Link to="/venta" className="link-unstyled">Registrar Venta</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/ventaList" className="link-unstyled">Listar Ventas</Link>
                  </NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="Clientes" id="clientes">
                  <NavDropdown.Item>
                    <Link to="/cliente" className="link-unstyled">Registrar Clientes</Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    <Link to="/clienteList" className="link-unstyled">Listar Clientes</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link>
                    <Link to="/estadisticas" className="link-unstyled">Estadísticas</Link>
                </Nav.Link>

                <Nav.Link>
                    <Link to="/galeria" className="link-unstyled">Galería</Link>
                </Nav.Link>

                <Nav.Link>
                    <Link to="/" className="link-unstyled" onClick={cerrarSesion}><FaRightFromBracket /></Link>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
            <Button
              variant="outline-light"
              onClick={toggleMenu}
              className="d-md-none d-block"
              aria-controls="basic-navbar-nav"
              aria-expanded={showMenu ? 'true' : 'false'}
            >
              Menú
            </Button>
          </Container>
        </Navbar>


        {/* Menú lateral (Offcanvas) */}
        <Offcanvas show={showMenu} onHide={toggleMenu} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">

              <Nav.Link>
                <Link to="/inicio" className="link-unstyled">Inicio</Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/about" className="link-unstyled">Información</Link>
              </Nav.Link>

              <Nav.Link>
                    <Link to="/galeria" className="link-unstyled">Galería</Link>
              </Nav.Link>

              <Nav.Link>
                    <Link to="/" className="link-unstyled"><FaRightFromBracket /></Link>
              </Nav.Link>

            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

    )}
    </div>
  );
}

export default Header;