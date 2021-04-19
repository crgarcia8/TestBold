import './History.css';
import React from 'react'
import { useSelector } from 'react-redux'
import { monthNames } from '../../Utils/Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faLink, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Card from '../../Common/Card/Card';
import moment from 'moment';

export const History = (props) => {
    const data = useSelector(state => state.data);
    const filters = useSelector(state => state.filters);
    const tabSelected = useSelector(state => state.tabSelected);

    const showTitle = () => {
        const actualMonth = monthNames[new Date().getMonth() + 1];
        const filter = {
            'today': 'hoy',
            'week': 'esta semana',
            'lastmonth': actualMonth
        }[tabSelected];
        return "Tus ventas de " + filter;
    }

    const typePaymentIcon = (typePayment) => {
        return {
            "datafono": <FontAwesomeIcon icon={faCalculator} />,
            "link": <FontAwesomeIcon icon={faLink} />
        }[typePayment]
    }
    const filterDataByDate = (dataForFilter) => {
        let dataResult = [];
        switch (filters.date) {
            case 'today':
                dataResult = dataForFilter.filter(item => {
                    let dateSource = moment(new Date(item.date)).format("MM-DD-yyyy");
                    let dateToday = moment().format("MM-DD-yyyy");
                    return dateSource === dateToday;
                })
                break;
            case 'week':
                dataResult = dataForFilter.filter(item => {
                    let startWeek = moment().startOf('isoWeek');
                    let weekOfItem = moment(new Date(item.date));
                    return weekOfItem > startWeek && weekOfItem <= moment(new Date());
                })
                break;
            case 'lastmonth':
                dataResult = dataForFilter.filter(item => {
                    let startMonth = moment().startOf('month');
                    let monthOfItem = moment(new Date(item.date))
                    return monthOfItem >= startMonth && monthOfItem <= moment().endOf('month');
                })
                break;
            default:
                break;
        }
        return dataResult;
    }
    const filterDataByTypePayment = (dataForFilter) => {
        const filtersOfData = Object.entries(filters.typePayment).reduce((acc, el) => {
            //If is different to "todos" and the value is true
            if (el[0] !== "todos" && el[1]) {
                acc.push(el[0])
            }
            return acc;
        }, []);
        return dataForFilter.filter(item => filtersOfData.includes(item.typePayment))
    }

    const showData = () => {
        if (data.length === 0) return <></>;
        const someFilterTypePayment = Object.values(filters.typePayment).some(item => item);

        let dataResult = [];
        if (filters.date)
            dataResult = filterDataByDate(data);
        if (someFilterTypePayment)
            dataResult = filterDataByTypePayment(dataResult);
        return dataResult.map(item => (
            <tr key={item.id}>
                <th>
                    {typePaymentIcon(item.typePayment)}
                    {` ${item.transaction}`}</th>
                <td>{item.date} {item.time}</td>
                <td><FontAwesomeIcon icon={faCreditCard} />{` ${item.numberCard}`}</td>
                <td>{item.transactionIdBold}</td>
                <td className="value">
                    <div>{`$${item.value.toLocaleString()}`}</div>
                    <div>{item.deduction && `Deducción Bold`}</div>
                    <div className="deductionValue">{item.deduction && `${item.deduction}`}</div>
                </td>
            </tr>
        ))
    }
    const content = (
        <div className="tableHistory" >
            <table className="table">
                <thead>
                    <tr>
                        <th>Transacción</th>
                        <th>Fecha y hora</th>
                        <th>Método de pago</th>
                        <th>ID transacción Bold</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {showData()}
                </tbody>
            </table>
        </div>
    )
    return (
        <Card
            className="cardHistory"
            header={showTitle()}
            content={content}
        />
    )
}

export default History;