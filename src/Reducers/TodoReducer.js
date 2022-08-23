const initialState={
    list:[],
   text:""
}

const TodoReducer = (state=initialState,action)=>{
switch(action.type){
    case "ADDTODO":
        const {id , data}=action.payload;
        return{
          ...state,
          list:[
            ...state.list,
            {
                id:id,
                data:data
            }
          ]
          
        }
        case "DELETETODO":
           const newlist= state.list.filter((list)=>list.id!==action.id)
        return{
          ...state,
           list:newlist
          
        }

        case "EDITTODO":
          return{
            ...state,
             text:state.list[action.payload]
            
          }
        case "ADD_TEXT":
          return{
            ...state,
            text:action.payload
          }
      
        default:return state;
}

}
export default TodoReducer