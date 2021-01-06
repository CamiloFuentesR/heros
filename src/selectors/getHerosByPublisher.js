import { heros } from '../data/heros.js';

export const getHerosByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heros.filter(hero => hero.publisher === publisher)
}