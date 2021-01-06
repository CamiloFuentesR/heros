import {heros} from '../data/heros.js';

export const getHerosById = (id) => {

    return heros.find(hero => hero.id === id)
}