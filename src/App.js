import logo from './logo.svg';
import './App.css';
import { ApiFetch } from './Actions/ApiAction';
import { increment, decrement } from './Actions/ApiAction';
import { useDispatch, useSelector } from 'react-redux';
import Todo from './Component/Todo';
import PostApi from './Component/PostApi';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.count)
  const userData = useSelector((state) => state.ApiReducer.apidata)
  console.log(userData)
  // const newData = new FormData()
  
  return (
    <div className="text-center">
      <div className='text-center app'>
        <h2>Counter {counter} </h2>
        <button className='btnStyle' onClick={() => dispatch(increment())}>+</button>
        <button className='btnStyle' onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div className='mb-5'>
      <Todo/>
      {/* <PostApi/> */}
      </div>

      <div className='text-center'>
        <button onClick={() => dispatch(ApiFetch())} style={{padding:"10px 70px",background:"gray",color:"white",border:"none",marginBottom:"40px"}}>click</button>
      </div >
      {
        userData === null ? "Loading...":
        userData.map((user)=>{
          return(
            <>
            <div className="row" style={{listStyle:"none"}}>
              <div className="col-sm-4" style={{textAlign:"end"}}>

            <li>{user.id}</li>
              </div>
              <div className="col-sm-6 mx-4" style={{textAlign:"start"}}>
                
            <li>{user.title}</li>
              </div>
            </div>
            </>
          )
        })
      }
    </div>
  );
}

export default App;
