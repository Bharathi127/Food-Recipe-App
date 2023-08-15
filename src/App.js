import React,{useState} from 'react'
import Products from './Component/Products';

const App = () => {
  let[data,setData]=useState();
  let [search,setSearch]=useState([]);
  const YOUR_APP_ID = "18e60e09";
  const YOUR_APP_KEY ="85544d243d618ff9b2d962b2f9af50c6";
  const  eventHandler=(e)=>{
    setData(e.target.value)
  }
  
  const clickhandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${data}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=50&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      
      data =>setSearch(data.hits)
      
    )
  }
  return (
    <div>
      <center>
        <h2>Food Recipe App</h2>
        <form onSubmit={clickhandler}>
          <input className='m-4' type="text" value={data} onChange={eventHandler}/><br/>
          <input className='btn btn-primary'type="submit" value="search"  />
        </form>
        <br/>
        {search.length>=1? <Products search={search}/>:""}
      </center>
    </div>
  )
}

export default App