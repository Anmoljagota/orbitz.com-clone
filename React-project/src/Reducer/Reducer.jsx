import React from 'react'

const Reducer = (state,action) => {
   
  switch(action.type){
  case "success":
            return {
                ...state,IsLoading:true
            }
  }
}

export default Reducer
