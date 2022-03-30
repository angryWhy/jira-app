import { useEffect } from 'react';
import { User } from '../types/projectType';
import { cleanObejct } from './cleanObejct';
import { useAsync } from './useAsync';
import { useHttp } from './useHttp';
export const useUser = (param?:Partial<User>)=>{
    const cilent = useHttp()
    const {run,...result} = useAsync<User[]>()
    useEffect(() => {
        run(cilent("users",{data:cleanObejct(param || {})}))
    }, [param])
    return result
}