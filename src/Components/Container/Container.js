import './Container.scss';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Filter, History, Summary } from '..'
import { getData } from '../../Redux/Actions/actions';

export const Container = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => {
            dispatch(getData());
        }
        fetchData();
    }, [])

    return (
        <div className="containerApp">
            <Summary />
            <Filter />
            <History />
        </div>
    )
}

export default Container;
