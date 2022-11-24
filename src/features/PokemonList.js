import { useGetPokemonByNameQuery } from "../services/pokemon";

export const PokemonList = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <>
      {error ? (
        <span>Oh no there was an error</span>
      ) : isLoading ? (
        <span>Is loading...</span>
      ) : data ? (
        <div>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt="image" />
        </div>
      ) : null}
    </>
  );
};

export default PokemonList;
