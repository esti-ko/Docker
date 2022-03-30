// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
const axios = require('axios');

function App() {

  const [x,setX] = useState(5);
  const [y,setY] = useState(3);

  const handlerSubmitGet = () => {
    // console.log("response");
    axios.get('http://localhost:5000/api/v1/bootcamps')
    .then((response)=>  {
       console.log(response.data);
      console.log('msg',response.data.data.msg);
      // console.log('[0]',response.data.data[1]);
      // console.log('[0]',response.data.data.id);
      setX(response.data.data.DB);
      console.log(x);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handlerChangePOST = (event) =>{
    setY(event.target.value);
    console.log(event.target.value);
  }

  const handlerSubmitPost = () => {
    console.log(y);
    axios.post('http://localhost:5000/api/v1/bootcamps',{data:y})
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
        <p>The value from data is:{x?.msg || ''}</p>
        <p>The default value is: {y}</p>
      </header>
    </div>
  );
}

export default App;
