import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';
import { fetchSelectCountry } from '../redux/selectCountrySlice';
import Loading from "../pages/Loading";
import moment from 'moment';
import CountUp from "react-countup";


function CountryCard({ country }) {

    const data = useSelector((state) => state.selectCountry.items)
    const status = useSelector((state) => state.selectCountry.status);

    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchSelectCountry())
        }
    }, [dispatch, status]);


    return (
        <div>
            <h4 className='text-center'>{country} {" "}
                <span className='fs-6'>
                    ({moment(data.lastUpdate).locale("tr").format("L")}
                </span>{" "}

                <span className='fs-6'>
                    {moment(data.lastUpdate).locale("tr").format("LT")})
                </span>
            </h4>

            {
                status === "loading" && <Loading></Loading>
            }

            {
                status === "succeeded" && <div className='d-flex justify-content-center mt-4'>

                    <Card className="my-2 me-4" color="primary" inverse style={{ width: '17rem' }} >
                        <CardHeader>
                            Infected
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                <CountUp
                                    start={0}
                                    end={data.confirmed.value}
                                    separator="."
                                />
                            </CardTitle>
                            <CardText className='pt-3 pb-0'>
                                Number of <i><b>infect</b></i> cases of <br /> <b>COVID-19</b>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card className="my-2 me-4" color="success" inverse style={{ width: '17rem' }} >
                        <CardHeader>
                            Recovered
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                <CountUp
                                    start={0}
                                    end={data.recovered.value}
                                    separator="."
                                />
                            </CardTitle>
                            <CardText className='pt-3 pb-0'>
                                Number of <i><b>recoveries</b></i> from <br /> <b>COVID-19</b>
                            </CardText>
                        </CardBody>
                    </Card>

                    <Card className="my-2 me-4" color="danger" inverse style={{ width: '17rem' }} >
                        <CardHeader>
                            Deaths
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                <CountUp
                                    start={0}
                                    end={data.deaths.value}
                                    separator="."
                                />
                            </CardTitle>
                            <CardText className='pt-3 pb-0'>
                                Number of <i><b>deaths</b></i>  caused by <br /> <b>COVID-19</b>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            }
        </div>
    )
}

export default CountryCard