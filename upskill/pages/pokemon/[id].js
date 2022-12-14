import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import Head from 'next/head'
import styles from '../../styles/Details.module.css'
import Link from 'next/link';

// const Details = ({
  const [pokemon, setpokemon] = useState(null);

  const {
    query: { id },
  } = useRouter();
  //get Pokemons from api
  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${id}.json`);
      const data = await res.json();
      setpokemon(data);
    }
    if (id) {
      fetchPokemon();
    }
  }, [id])

  // if (!pokemon) {
  //   return null;
  // }
  return (
    <>
      <div>
        <Head>
          <title>{pokemon.name}</title>
        </Head>
        <div>
          <Link href="/">
            Back to Home
          </Link>
        </div>
        <div className={styles.layout}>
          <div>
            <img
              className={styles.picture}
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
              alt={pokemon.name}
            />
          </div>
          <div className={styles.name}>
            {pokemon.name}
          </div>
          <div className={styles.type}>
            {pokemon.type.join(", ")}
          </div>
          <table>
            <thead className={styles.header}>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.stats.map(({name,value})=>(
                <tr key={name}>
                     <td className={styles.attribute}>{name}</td>
                     <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Details;