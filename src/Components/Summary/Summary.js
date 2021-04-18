import './Summary.scss';
import React from 'react'
import { monthNames } from '../../Utils/Constants';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../Common/Card/Card';
import { useSelector } from 'react-redux';
import moment from 'moment';

export const Summary = () => {
    const data = useSelector(state => state.data)
    const startMonth = moment().startOf('month');
    const endMonth = moment().endOf('month');

    const filterDataActualMonth = data.filter(item => {
        const dateItem = moment(new Date(item.date));
        return dateItem >= startMonth && dateItem <= endMonth;
    });

    const getDataActualMonth = (acc, el) => {
        return acc + el.value;
    }
    const summaryDataActualMonth = filterDataActualMonth.reduce(getDataActualMonth, 0);

    const actualMonth = monthNames[new Date().getMonth() + 1];
    const actualYear = new Date().getFullYear();

    const header = (
        <>
            Total de ventas de {actualMonth}
            <div className="iconInfo" >
                <FontAwesomeIcon icon={faInfoCircle} />
            </div >
        </>);

    const content = (
        <>
            <div className="headerTitle">{`$${summaryDataActualMonth.toLocaleString()}`}</div>
            <br />
            {actualMonth}, {actualYear}
        </>
    )
    
    return (
        <Card
            className="cardSummary"
            header={header}
            content={content}
        />
    )
}

export default Summary;
