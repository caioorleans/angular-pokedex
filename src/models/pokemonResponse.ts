export type PokemonResponse = {
  sprites: {
    other:{
      home:{
        front_default:string;
      }
    }
  },
  types: {
    type: {
      name:string,
      url:string
    }
  }[],
  stats: {
    base_stat: number,
    stat: {
      name:string
    }
  }[]
}
