import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHerosByName } from '../../selectors/getHerosByName';
import { useMemo } from 'react';

export const SearchScreen = ({ history }) => {
    const location = useLocation();

    //aqui se puede agregar un use memo para que solo se ejecute cuando cambia
    const { q = '' } = queryString.parse(location.search);
    console.log(location)


    const [{ description }, handleInputChange] = useForm({
        description: q
    });

     const herosFilter = useMemo(() => getHerosByName(q), [q]) ;


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(description)

        history.push(`?q=${description}`)
        
    }

    return (
        <div className="row">
            <div className="col-3 in">
                <h4>Search Form</h4>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name="description"
                        placeholder="Find your hero"
                        autoComplete="off"
                        className="form-control"
                        value={description}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="btn btn-sm mt-3 btn-outline-primary"
                    >
                        Search...</button>
                </form>

            </div>
            <div className="col-9 search">
                {
                    herosFilter.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }

            </div>

        </div>
    )
}
