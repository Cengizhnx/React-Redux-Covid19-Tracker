import React from 'react'
import { Input } from 'reactstrap';
import { useEffect, useState } from 'react';
import { fetchCountries } from '../redux/countrySlice';
import { useSelector, useDispatch } from "react-redux";
import Loading from '../pages/Loading';
import { fetchSelectCountry } from '../redux/selectCountrySlice';
import CountryCard from './CountryCard';

function Country() {

    const [country, setCountry] = useState("Turkey");

    const countries = useSelector((state) => state.country.countries)
    const status = useSelector((state) => state.country.status);

    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCountries())
        }
    }, [dispatch, status])

    useEffect(() => {
        dispatch(fetchSelectCountry(country))
    }, [dispatch, country])

    const handleCountries = (e) => {
        setCountry(e.target.value);
    };


    return (
        <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
            {
                status === "loading" && <Loading></Loading>
            }
            {
                status === "succeeded" &&

                <Input value={country} onChange={handleCountries} className="mb-4 w-25" type="select">

                    {
                        countries.countries.map((item, key) => (
                            <option value={item.name} key={key}>
                                {item.name}
                            </option>
                        ))
                    }

                </Input>
            }
            {
                <CountryCard country={country} ></CountryCard>
            }
        </div>
    )
}

export default Country