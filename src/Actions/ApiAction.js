import axios from "axios"
export const ADD_USER ="ADD_USER"
export const FetchApi ="FETCH_API_DATA"
export const FetchApiSuccess ="FETCH_API_Success"
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDTODO ="ADDTODO";
export const DELETETODO="DELETETODO"
export const EDITTODO="EDITTODO"
export const ADD_TEXT="ADD_TEXT"
export const increment = () => {
    return {
      type: INCREMENT,
      payload: 1
    };
  };
  export const decrement = () => {
    return {
      type: DECREMENT,
      payload: 1
    };
  };
export const ApiFetch=()=>{
return async(dispatch)=>{
    const request = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    dispatch({
        type:FetchApi,
        payload:request
    })
}
}
export const userLoginRequest = () => dispatch => {
  axios.post(`localhost:5000/api/users`)
  .then( userdata => 
      dispatch({
          type: ADD_USER,
          payload: userdata
      })
  )
  .catch( error => {
      console.log(error);
  });
};
export const ApiSuccess = ()=>{
    return{
        type:FetchApiSuccess
    }

}
export const addTodo = (data) => {
  return {
    type: ADDTODO,
    payload:{
      id:new Date().getTime().toString(),
      data : data
    }
  };
};
export const deletTodo = (id) => {
  return {
    type: DELETETODO,
    id
  };
};

export const editTodo = (key) => {
  return {
    type: EDITTODO,
  //   payload: {
  //     id: id,
  //   },
  //   isEdit: true,
  payload:key
  };
};
export const addtext=(value)=>{
  return{
    type: ADD_TEXT,
    payload:value
  }
}