import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
const axios = require('axios');

function App() {

  const [x,setX] = useState();
  const [y,setY] = useState(3);

  const handlerSubmitGet = () => {
    axios.get('http://localhost:5000/api/v1/bootcamps')
    .then((response)=>  {
      console.log(response);
      setX(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handlerChangePOST = (event) =>{
    setY(event.target.value)
  }

  const handlerSubmitPost = (event) => {
    console.log(y);
    axios.post('http://localhost:5000/api/v1/bootcamps/',{data:y})
    .then((response)=>  {
      console.log(response);
      setX(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>My client</h1>
        <button onClick={handlerSubmitGet} >GET</button><br/>
        <button onClick={handlerSubmitPost} >POST</button><br/>
        <input placeholder="Enter a value" onChange={handlerChangePOST}/>
        <p>The message is:{x?.msg || ''}</p>
      </header>
    </div>
  );
}

export default App;
