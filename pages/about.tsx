import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function about() {
  return (
  <div className={styles.container}>
    <h1>Sobre o projeto</h1>

    <p>Projeto em NextJS, utilizando API do PokwApi </p>
         
          <Image src="/charizard.png" alt='ImagemPokemon' width={350} height={350}/>
  
  </div>
  
   )
}
