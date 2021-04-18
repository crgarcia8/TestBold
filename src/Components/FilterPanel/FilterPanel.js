import './FilterPanel.scss';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { addFilter } from '../../Redux/Actions/actions';

export const FilterPanel = (props) => {
    const filtersByStore = useSelector(state => state.filters);
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState(filtersByStore.typePayment);
    const dispatch = useDispatch();

    const handleToggleFilter = () => {
        setShowFilter(true);
    }

    const handleChangeCheckBoxOptions = (event) => {
        const { name, checked } = event.target;
        const newFilters = { ...filters, [name]: checked };
        newFilters.todos = newFilters.datafono && newFilters.link
        setFilters(newFilters);
    }
    const handleChangeCheckBoxTodos = (event) => {
        const { checked } = event.target;
        setFilters({ todos: checked, datafono: checked, link: checked });
    }

    const handleFilterApply = () => {
        setShowFilter(false);
        dispatch(addFilter({ typePayment: filters }));
    }

    const classFilter = `panel panel-custom ${(showFilter) ? '' : 'is-hidden'}`;
    return (
        <>
            <button
                className="button"
                onClick={() => handleToggleFilter()}>
                <span className="icon">
                    <FontAwesomeIcon icon={faFilter} />
                </span>
                <span>FILTRAR</span>
            </button>
            <nav className={classFilter}>
                <p className="panel-heading">
                    filtrar
                </p>
                <label className="panel-block">
                    <input
                        type="checkbox"
                        name="datafono"
                        checked={filters.datafono}
                        onChange={handleChangeCheckBoxOptions}
                    />Cobro con datafono
                </label>
                <label className="panel-block">
                    <input
                        type="checkbox"
                        name="link"
                        checked={filters.link}
                        onChange={handleChangeCheckBoxOptions}
                    />Cobros con link de pago
                </label>
                <label className="panel-block">
                    <input
                        type="checkbox"
                        name="todos"
                        checked={filters.todos}
                        onChange={handleChangeCheckBoxTodos}
                    />Ver Todos
                </label>
                <div className="panel-block panel-block-footer">
                    <button
                        className="button bold is-link is-outlined is-fullwidth"
                        onClick={() => handleFilterApply()}
                    >
                        Aplicar
                    </button>
                </div>
            </nav>
        </>
    )
}

export default FilterPanel;
