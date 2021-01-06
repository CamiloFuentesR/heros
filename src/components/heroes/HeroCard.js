import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters }) => {
    return (
        <div className="col-sm-4 responsive">
            <div className="card" style={{  marginBottom: 30, }}>
                <div className="row">
                    <img src={`./assets/heroes/${id}.jpg`} className=" col-6" alt={id} />
                    <div className="col-6 text-center">
                        <div className="card-body col-15" style={{ minHeight: 150 }}>
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">
                                {characters.substr(0,30)+'...'}
                            </p>
                            {/* {
                            (alter_ego!== characters)
                            &&
                            <p className="card-text ">
                                {characters}
                            </p>
                        } */}
                        <Link to={`./hero/${id}`}>mas...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
