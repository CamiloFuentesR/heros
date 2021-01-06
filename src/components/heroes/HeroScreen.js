import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHerosById } from '../../selectors/getHerosById'

export const HeroScreen = ({ history }) => {

    //heroid es sacado del path de las rutas
    const { heroeId } = useParams();
    console.log(heroeId)
    console.log(history)
    // const hero = getHerosById(heroeId);
    const hero =useMemo(() => getHerosById(heroeId), [heroeId])

    // validacion en caso de que el heroe sea undefined para que no slga error y redireccione a l pgina raiz
    if (!hero) {
        return <Redirect to="/" />;
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    const handleReturn = () => {
        //validacion en caso de que entre a lapag por ruta y no tenga un history para volver, de lo cotnrario me saca de la app
        (history.length <= 2)
            ? history.push('/')
            : history.goBack();

    }

    return (
        <div className="back animate__animated animate__fadeInDown"tyle={{marginTop:25,backgroundImage: `../assets/heroes/${heroeId}.jpg`}}>
            <h1>Hero Screen</h1>
            <div className="row mt-5 text-left">
                <div className="col-3">
                    <img src={`../assets/heroes/${heroeId}.jpg`} className="card-img" alt={publisher}></img>
                </div>
                <div className="col-9">
                    <h1> {superhero}</h1>
                    <hr/>
                    <h4>{alter_ego}</h4>
                    <p><b>Primera aparición:</b>{first_appearance}</p>
                    <p>Caracteres{characters}</p>
                    <button className="btn btn-primary"
                        onClick={handleReturn}
                        style={{verticalAlign:'bottom'}}
                    >
                        volver</button>
                </div>
            </div>
        </div>
    )
}
