import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
	const title = 'THINGS TO DO';
	const {totalchk, changeItemState} = props;

	return (
		<header>
			<h1>{title.toUpperCase()}</h1>
			<InputWrapper {...props}/>
			<div className="field" >
				<input type="checkbox" checked={totalchk} 
                    onClick={() => changeItemState(-1)} />
                    TITLE :: TIMESTAMP
            </div>
		</header>

	)
}