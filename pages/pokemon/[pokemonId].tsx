import React from 'react'
import  styles from '../../styles/Pokemon.module.css'
import { GetStaticPaths, GetStaticProps } from 'next';



type Pokemons = {
    pokemon: {
        name: string
        id: string
        types: any
        height: number
        weight: number
     
    }
}

export const getStaticPaths = async() => {

    const maxPokemons = 251;
  const api = `https://pokeapi.co/api/v2/pokemon/`;

  const res = await fetch(`${api}/?limit=${maxPokemons}`);

  const data = await res.json();

//params
const paths = data.results.map((pokemon: Pokemons , index: number) => {
    return{
        params: {pokemonId: (index + 1).toString()}
    }
})
return{
    paths,
    fallback: false,
}

}

export const getStaticProps: GetStaticProps = async(context:any) => {
 const id = context.params.pokemonId
 const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

 const data = await res.json()

 return{
    props: { pokemon: data}
 }

}

export default function Pokemon( {pokemon}: Pokemons) {
  return (
   <div className={styles.pokemonContainer}>
    <h1 className={styles.title}> {pokemon.name} </h1>
    <img
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="210"
        height="210"
        alt={pokemon.name}
      />
      <div>
          <h3>Número:</h3>
          <p># {pokemon.id}</p>
      </div>
      <div>
          <h3>Tipo:</h3>
           <div className={styles.typesContainer}>
            {pokemon.types.map((item: any, index: any ) => (
               <span key={index} className={`${styles.type} ${styles['type' + item.type.name]}`}> {item.type.name}</span>
            ))}
           </div>
      </div>
      <div className={styles.dataContainer}>

        <div className={styles.dataHeight}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
        </div>

        
        <div>
            <h4 className={styles.dataWeigth}>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
        </div>

      </div>
   </div>
  )
}
