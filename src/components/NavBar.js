import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Keep if needed for other purposes
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// SVG Paths

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
           <span className='Altea'>Altea Kapxhiu</span> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#Certefications" className={activeLink === 'Certefications' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Certefications')}>Certefications</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/alteakapxhiu"><img src={"https://pngimg.com/d/github_PNG83.png"} alt="Github" /></a>
                <a href="https://www.linkedin.com/in/alteakapxhiu/"><img src={"https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"} alt="Linkedin" /></a>
                <a href="https://drive.google.com/file/d/16L7tniVEaURimsUND-eXyN0M3V4Pl6s4/view"><img src={"https://pic.onlinewebfonts.com/thumbnails/icons_558276.svg"} alt="" /></a>
              </div>
            
              <a href="mailto:alteakapxhiu@gmail.com?subject=Let’s%20Connect&body=Hello%2C%0D%0AI%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0AThank%20you.">
                <button className="vvd"><span>Let’s Connect</span></button>
              </a>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;
