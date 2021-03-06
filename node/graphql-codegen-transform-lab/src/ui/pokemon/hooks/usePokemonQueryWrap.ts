import {
  Pokemon,
  usePokemonQuery,
} from "../../../graphql-client/generated/graphql";

const transform = (pokemon: Pokemon | null | undefined): Pokemon | null => {
  if (!pokemon) {
    return null;
  }
  return pokemon;
};

export const usePokemonQueryWrap = () => {
  const result = usePokemonQuery();
  const [query] = result;
  const { data, fetching, error } = query;
  return { pokemon: transform(data?.pokemon), fetching, error };
};
