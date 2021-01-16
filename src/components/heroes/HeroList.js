import React, { useMemo } from 'react'
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher.js'
import { HeroCard } from './HeroCard.js'

export const HeroList = ({ publisher }) => {
    // const heros = getHerosByPublisher(publisher)
    console.log(publisher)

    //si cambi l publisher entones se renderiza de nuevo, de lo contrario se carga la info guardada
    const heros =useMemo(() => getHerosByPublisher(publisher), [publisher])


    return (
        <div className="row animate__animated animate__fadeIn" style={{justifyContent:'center'}}>
                {
                    heros.map(hero => (
                        <HeroCard key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>
    )
}
