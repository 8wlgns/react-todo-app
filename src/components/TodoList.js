import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList'
import {applyFilter, search} from '../services/filter'

export default function TodoList(props) {
	const {list, filter, mode, query, asc, totalchk} = props.data;
	const {addNew, changeItemState, changeFilter, changeMode, setSearchQuery, changeSortState} = props.actions;
	const items = search(applyFilter(list, filter), query);
	const count = items.length;

    return (
	  <div className="todolist">
        <Header {...{addNew, mode, query, setSearchQuery, totalchk, changeItemState}} />
        <FilteredList {...{items, changeItemState}}/>
        <Footer {...{count, filter, changeFilter, mode, changeMode, asc, changeSortState}}/>
        <Info {...{mode}}/>
	   </div>
	);
}
