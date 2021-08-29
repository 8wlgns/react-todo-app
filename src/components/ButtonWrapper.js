import React from 'react'
import {MODE_NONE, MODE_CREATE, MODE_SEARCH} from './../services/mode';

export default function ButtonWrapper(props){
	console.log('buttonwrapper ' + props.mode);

	const {mode, changeMode, changeSortState, asc} = props;
	const isCreateMode = () => mode === MODE_CREATE;
	const isSearchMode = () => mode === MODE_SEARCH;
	const isAscSort = () => asc === true;

	return (
		<div>
			<a title="Add New" 
				className={'button add ' + (isCreateMode() ? 'selected': '' )}
				onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}>
			</a>
			<a title="Search" 
				className={'button search ' + (isSearchMode() ? 'selected': '' )}
				onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}>
			</a>
			<a title="Toggle Title Sort"
				className={'button search '}
				onClick={() => changeSortState(isAscSort(), 'text')}>
			</a>
			<a title="Toggle Text Sort"
				className={'button search '}
				onClick={() => changeSortState(isAscSort(), 'timestamp')}>
			</a>
		</div>
	)
}