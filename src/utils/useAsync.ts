import { useState } from "react"

interface State<D>{
    error:Error | null,
    data:D|null,
    stat:"idle" | "loading" | "error" | "success"
}

const defaultState :State<null> = {
    stat:"idle",
    data:null,
    error:null
}

export const useAsync = <D>(initState?:State<D>) =>{
     const [state, setState] = useState({
         //没传默认
         ...defaultState,
         ...initState
     })
     const setData = (data :D) =>{
         setState({
             data,
             stat:"success",
             error:null
         })
     }
     const setError = (error:Error) =>{
          setState({
              error,
              stat:"error",
              data:null
          })
     }
     //触发异步请求
     const run = (promise :Promise<D>)=>{
         //没then属性
         if(!promise || !promise.then){
             throw new Error("传入promise 类型数据")
         }
         setState({
             ...state,
             stat:"loading"
         })
         return promise.then(data=>{
             setData(data)
             return data
         }).catch(error =>{
             setError(error)
             return error
         })
     }
     return {
         isIdle:state.stat === "idle",
         isLoading :state.stat === "loading",
         isError: state.stat === "error",
         isSuccess : state.stat === "success",
         run,setData,setError,...state
     }
}