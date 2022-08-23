import {FetchApi,ADD_USER} from "../Actions/ApiAction"

const initialState ={
apidata:null,
firstName: '',
lastName: '',
email: ''
}

const ApiReducer = (state=initialState,action)=>{
    switch (action.type){
        case FetchApi :
            return{
                ...state ,
                apidata:action.payload.data
            }
            case ADD_USER:
            return {
                ...state,
                items: action.payload
            };
           
        }
        
        return state
    }

export default ApiReducer