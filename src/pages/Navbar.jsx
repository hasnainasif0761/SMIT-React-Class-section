import React from 'react'
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';

const Navbar = () => {
    const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#0f172a",
      padding: "15px 40px"
    },
    logo: {
      color: "#fff",
      fontSize: "22px",
      fontWeight: "bold"
    },
    navLinks: {
      display: "flex",
      gap: "25px"
    },
    link: {
      textDecoration: "none",
      color: "#cbd5f5",
      fontSize: "16px",
      transition: "0.3s"
    },
    button: {
      padding: "8px 18px",
      backgroundColor: "#38bdf8",
      border: "none",
      borderRadius: "6px",
      color: "#000",
      cursor: "pointer",
      fontWeight: "bold"
    }
  };
    return (
        <>
        <div style={styles.navbar}>
      <div style={styles.logo}>MyApp</div>

      <div style={styles.navLinks}>
        <Link to={'/'} style={styles.link}>Home</Link>
        <Link to={'/about'} style={styles.link}>About</Link>
        <Link to={'/services'} style={styles.link}>Services</Link>
        <Link to={'/contact'} style={styles.link}>Contact</Link>
        {/* <a href="#" style={styles.link}>Services</a> */}
        {/* <a href="#" style={styles.link}>Contact</a> */}
      </div>
      <button style={styles.button}>Login</button>
    </div>
    <HeroSection/>
    </>
  )
}

export default Navbar