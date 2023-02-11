import { Stat } from "./stat"

export type Pokemon = {
  pokedexNumber: number,
  name: string,
  image: string,
  types: string[],
  stats: Stat[]
}
