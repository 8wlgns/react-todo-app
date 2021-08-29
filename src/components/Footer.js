import React from 'react';
import Filter from './Filter';
import ButtonWrapper from './ButtonWrapper';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../services/filter';

export default function Footer(props) {
	const {count, filter, changeFilter, mode} = props;

	return (
		<footer className="clearfix">
			<div className="pull-left buttons">
				<ButtonWrapper {...props}/>
			</div>
			<div className="pull-left">
				{
				  `${count} items ${ ((filter === FILTER_ALL) || (filter === FILTER_COMPLETED)) ? `total`: `left`}`
				}
			</div>
			<div className="pull-right">
				<Filter {...{filter, changeFilter}}/>
			</div>
		</footer>
	);
}