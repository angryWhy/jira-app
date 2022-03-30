import { useEffect, useRef } from 'react';
export const useDocument = (title:string,keepOnUnmount:boolean = true)=>{
    //先开始ReactApp
    const oldTitle = useRef(document.title).current
    useEffect(()=>{
        document.title = title
    },[title])
    useEffect(()=>{
        return()=>{
            if(!keepOnUnmount){
                document.title=oldTitle
            }
        }
    },[])
}