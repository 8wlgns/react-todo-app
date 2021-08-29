import React from 'react';

export default function TodoItem(props) {
	const {data, change} = props;

	return (
		<li className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input type="checkbox" checked={data.completed} 
                    onClick={() => change(data.id)} />
                    {data.text} :: {data.timestamp}
                </label>
              </div>
    	</li>
	)

}