function simpleStateFunction<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
  
    return [
      () => val,
      (v: T) => {
        val = v;
      },
    ];
  }


interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[]{
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item)
  }));

  ranks.sort((a,b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string,
  hp: number
}

const pokemon: Pokemon[] = [
  {
    name: 'charizard',
    hp: 10
  },
  {
    name: 'bulbasaur',
    hp: 20
  }
]

const pokerank = ranker(pokemon, ({hp}) => hp)
console.log(pokerank)