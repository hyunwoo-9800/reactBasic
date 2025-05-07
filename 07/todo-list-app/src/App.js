import React from 'react';
import TodoList from './components/TodoList';
import './App.css';
// import may from './may.jpg';
// import BackgroundExample from './example/BackgroundExample';

function App() {
  return (
    <div className="App">
      {
        // <BackgroundExample />
        // <img
        //   src={process.env.REACT_APP_PUBLIC_URL + '/may1.jpg'}
        //   className="App-logo"
        //   alt="메이"
        // />
        // <img src={may} className="App-logo" alt="메이" />
        <TodoList />
      }
    </div>
  );
}

export default App;