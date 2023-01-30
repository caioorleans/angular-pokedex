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
  }[]
}
