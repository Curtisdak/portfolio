import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id='navBar'>
            <h2 className='text-logo'onClick={()=> navigate('./')} >Curtis.Dak</h2>
            <button className='hamburger' onClick={toggleMenu}>
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <button onClick={() => { navigate('/'); setIsMenuOpen(false); }}>Home</button>
                <button onClick={() => { navigate('/curtis-projects'); setIsMenuOpen(false); }}>Projects</button>
                <button onClick={() => { navigate('/contact-curtis'); setIsMenuOpen(false); }}>Contact me</button>
            </div>
        </div>
    );
}

export default NavBar;
