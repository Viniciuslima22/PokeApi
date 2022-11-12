
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Card.module.css'



export default function Card({ pokemon }: any) {
  return (
    <div className={styles.card}>
      <img
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        
        alt={pokemon.name}
         className={styles.cardImg} />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} className={styles.details}>
            Detalhes
      </Link>
    </div>
  );
}