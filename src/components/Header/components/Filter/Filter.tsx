// import GetSvg from 'shared/GetSvg';

import s from './Filter.module.scss';

const Filter = ({result=0}) => {
    return <>
        <form className={s.filterForm}>
            <label className={s.filterLabel} htmlFor="filter">Filter by keywords</label>
            <input className={s.filterInput} type="text" name="filter" />
        </form>
        <p className={s.results}>Results: {result}</p>
    </>
}

export default Filter;