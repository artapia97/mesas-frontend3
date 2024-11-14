import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosExample = () => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon/charmander";

  useEffect(() => {
    axios(url)
      .then((res) => {
        setPokemon(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const imageStyle = {
    filter: "grayscale(100%) brightness(0)",
  };

  return (
    <div>
      {loading ? (
        <>
          <h1>¿Quién es ese Pokémon?</h1>
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt="" width="400" style={imageStyle} />
          )}
        </>
      ) : (
        <>
          <h1>¡Es {pokemon.name}!</h1>
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} width="400" />
          )}
        </>
      )}
    </div>
  );
};

export default AxiosExample;
