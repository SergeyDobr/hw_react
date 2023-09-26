import React from 'react';
import ReactDOM from 'react-dom';


const User = (pro) => {
  return (
    <div>
      <p>Name: {pro.name}</p>
      <p>Age: {pro.age}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <User name="Serhii" age="25" />
      <User name="Alina" age="21" />
    </div>  
  )
}




ReactDOM.render(<App />, document.getElementById('root'));
