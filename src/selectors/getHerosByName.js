import { heros } from '../data/heros'

export const getHerosByName = (name) => {
    name =name.toLocaleLowerCase();

    if(name === ''){
        return[];
    }
    return heros.filter(hero => (
        hero.superhero.toLocaleLowerCase().includes(name)
    ))
}
