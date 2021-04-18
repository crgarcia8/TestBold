import './Filter.scss';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterPanel } from '../';
import { setTabFilter, addFilter } from '../../Redux/Actions/actions';
import { monthNames } from '../../Utils/Constants';
import { Tabs, Tab } from '../../Common';

export const Filter = () => {
    const tabSelected = useSelector(state => state.tabSelected);
    const actualMonth = monthNames[new Date().getMonth() + 1];
    const dispatch = useDispatch();

    const handleChangeTab = (tab) => {
        dispatch(setTabFilter(tab));
        dispatch(addFilter({ date: tab }));
    }

    return (
        <>
            <Tabs >
                <Tab name="Hoy" isActive={tabSelected === 'today'} onClick={() => handleChangeTab('today')} />
                <Tab name="Esta Semana" isActive={tabSelected === 'week'} onClick={() => handleChangeTab('week')} />
                <Tab name={actualMonth} isActive={tabSelected === 'lastmonth'} onClick={() => handleChangeTab('lastmonth')} />
            </Tabs>
            <FilterPanel />
        </>
    )
}

export default Filter;
