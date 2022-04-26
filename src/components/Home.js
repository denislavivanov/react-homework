import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import FilterArea from "./FilterArea";
import Input from "./Input";
import Spinner from "./Spinner";
import Select from "./Select";
import Error from "./Error";
import Grid from "./Grid";

const Home = () => {
    const { countries, loading, error } = useSelector(state => state.countries);

    useEffect(() => {
        document.querySelector("body").classList.remove("detail");
    }, [])

    return (
        <main className="home">
            <FilterArea>
                <Input />
                <Select />
            </FilterArea>

            {loading ? <Spinner /> :
                error || countries.length === 0 ? <Error />
                    : <Grid items={countries} />}
        </main>
    )
}

export default Home;