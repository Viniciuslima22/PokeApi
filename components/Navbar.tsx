import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/NavBar.module.css' 

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <a href="/">
                <Image src="/pokeball.png" width={30} height={30} alt="Pokeapi imagem"/>
                </a>
                <h1>PokeApi</h1>
            </div>
            <ul className={styles.LinkItems}>
                <li>
                    <Link href="/">
                         HOME
                    </Link>
                </li>

                    <li>
                        <Link href="/about">
                             SOBRE
                        </Link>
                    </li>
            </ul>
        </nav>
    )
}
