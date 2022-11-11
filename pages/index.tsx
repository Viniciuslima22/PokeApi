
import Image from "next/image";
import { GetStaticProps } from "next";

import styles from "../styles/Home.module.css";
import Card from "../components/Card";


type Pokemons = {
  pokemon: {
      name: string
      id: string
      types: string
    
   
  }
}


export const getStaticProps: GetStaticProps = async () => {
  const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

  // add pokemon index
  data.results.forEach((item:any, index: string) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons}: any) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Poke<span>Api</span>
        </h1>
        <Image src="/pokeball.png" width={50} height={50} alt="PokeApi"
        />
      </div>
      <div className={styles.PokeContainer}>
        {pokemons.map((pokemon: any) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}