import React, {Component} from 'react';
import TodoList from './TodoList.js'
import StateProvider from './StateProvider'
import KeyStrokeHandler from './KeyStrokeHandler';

class App extends Component  {
  render() {
    return (
    <StateProvider>
    	<KeyStrokeHandler>
      		<TodoList />
      	</KeyStrokeHandler>
     </StateProvider>
    )
  }
}

export default App;
