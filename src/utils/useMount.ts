import { useEffect } from 'react';
export const useMount = (callback:()=>void)=>{
    useEffect(() => {
        callback()
        //callback传入造成无限循环
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])  
}