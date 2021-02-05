export const students = (state={},action)=>{
    switch(action.type){
        case 'STUDENTS_LIST':{
            return {...state,list:action.payload}
        }

        case 'SEARCH_STUDENTS_LIST':{    
            return {...state,search:action.payload}
        }

        case 'STUDENT_DETAILS':{
            return{...state,details:action.payload}
        }

        case 'CLEAR_STUDENT_DETAILS':{
            return{...state,details:action.payload}
        }

        case 'STUDENT_ADDED':{
            return{...state,added:action.payload}
        }
        
    }

    return state
}