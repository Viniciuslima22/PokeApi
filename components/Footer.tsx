import React from 'react'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
   <footer className={styles.FooterContainer}>
    <p>
        <span>PokéApi</span> &copy;{new Date().getFullYear()} 
    </p>

   </footer>
  )
}
