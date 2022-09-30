import React from 'react'

const Reducer = (state,action) => {
   
  switch(action.type){
    case "loading":
        return {
            ...state,IsLoading:true
        }
        case "success":
            return {
                ...state,IsLoading:false
            }
  }
}

export default Reducer
