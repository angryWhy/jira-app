import { useEffect } from 'react';
import { Project } from '../types/projectType';
import { cleanObejct } from './cleanObejct';
import { useAsync } from './useAsync';
import { useHttp } from './useHttp';
export const useProject = (param:Partial<Project>)=>{
    const cilent = useHttp()
    const {run,...result} = useAsync<Project[]>()
    useEffect(() => {
        run(cilent("projects",{data:cleanObejct(param || null)}))
    }, [param])
    return result
}