import React, {Component} from 'react';
import {FILTER_ALL} from './../services/filter';
import {MODE_CREATE, MODE_NONE} from './../services/mode';
import {objectWithOnly, wrapChildrenWith} from '../util/common';
import {getAll, addTodoList, sortTodoList} from './../services/todo';

class StateProvider extends Component {
	constructor(){
		super();
		this.state = {
			query: '',
			totalchk: false,
			asc: true,
			mode: MODE_NONE,
			filter: FILTER_ALL,
			list: getAll(),
		}
	}

	render() {
		let children = wrapChildrenWith(this.props.children, {
			data: this.state,
			actions: objectWithOnly(this, ['addNew', 'changeItemState', 'changeFilter', 'changeMode', 'setSearchQuery', 'changeSortState'])
		})

		return <div>{children}</div>
	}

	addNew(text){
		let updatedList = addTodoList(this.state.list, text);
		this.setState({
			list: updatedList
		});
	}

	changeSortState(asc, attr){
		console.log('changeSortState....');
		let sortedList = sortTodoList(this.state.list, attr, asc);
		console.log(sortedList);
		this.setState({
			asc: !asc,
			list: sortedList
		})
	}

	changeItemState(id){
		let updatedList = this.state.list;
		let totalchk = this.state.totalchk;

		if (id === -1){
			updatedList.map(list => {
				list.completed = !totalchk;
			});
			totalchk = !totalchk;
		} else {
			updatedList.map(list => {
				if (list.id === id) {
					list.completed = !list.completed
				}
			});
		}
		this.setState({
			totalchk: totalchk,
			list: updatedList
		})
	}

	changeFilter(filter){
		this.setState({
			filter
		})
	}

	changeMode(mode = MODE_NONE) {
		this.setState({
			mode
		});
	}

	setSearchQuery(text) {
		this.setState({
			query: text || ''
		})
	}

}

export default StateProvider;