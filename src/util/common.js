import React from 'react'

export function objectWithOnly(object, attrs){
	let newObject = {};
	attrs.forEach(attr => {
		newObject[attr] = object[attr].bind(object);
	})

	return newObject;
}

export function wrapChildrenWith(children, props){
	console.log('wrapChildrenWith...');
	console.log(children);
	return React.Children.map(children, child =>
		React.cloneElement(child, props));
}

export function stringIncludes(str, substr){
	return str && str.toLowerCase().indexOf(substr) !== -1;
}