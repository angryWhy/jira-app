import * as React from 'react';
import {  useState } from 'react';
import List from './List/index';
import SearchPanel from './SearchPanel';

import { useDebounce } from '../../utils/useDebounce';

import { useProject } from '../../utils/useProject';
import { useUser } from '../../utils/useUser';
import { useDocument } from '../../utils/useDocument';

interface IProjectListProps {

}

const ProjectList: React.FunctionComponent<IProjectListProps> = (props) => {
    const [param, setParam] = useState<{name:string,personId:string}>({
        //input拿到的值
        name: "",
        //select拿到的值
        personId: ""
    })
    //请求结果的数据，
    // const [list, setList] = useState([])
    // const [loading,setLoding] = useState(false)
    // const [error,setError] = useState<Error | null>(null)
    //用于list的取personId,search-panel用到name
    // const [users, setUsers] = useState([])
    // const cilent = useHttp()
    const debounceValue = useDebounce(param,2000)
    // const {run,isLoading,error,data :list} =useAsync<Project[]>()
    const {isLoading,error,data:list} = useProject(debounceValue)
    useDocument("项目列表",false)
    const {data:users} = useUser()
    // useEffect(() => {
    //     run(cilent("projects",{data:cleanObejct(debounceValue)}))
    //     setLoding(true)
    //     // cilent("projects",{data:cleanObejct(debounceValue)}).then(setList).catch(setError).finally(
    //     //     ()=>{
    //     //         setLoding(false)
    //     //     }
    //     // )
    //     // fetch(`http://localhost:3004/projects?${qs.stringify(cleanObejct(debounceValue))}`).then(
    //     //     async (response) => {
    //     //         //ok，请求成功
    //     //         if (response.ok) {
    //     //             //设置list值
    //     //             setList(await response.json())
    //     //         }
    //     //     }
    //     // )
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [debounceValue])
    // useMount(() => {
    //     cilent("users").then(setUsers)
    //     // fetch('http://localhost:3004/users').then(
    //     //     async (response) => {
    //     //         //ok，请求成功 
    //     //         if (response.ok) {
    //     //             //设置list值
    //     //             setUsers(await response.json())
    //     //         }
    //     //     }
    //     // )
    // })
    return (<div>
        <SearchPanel param={param} setParam={setParam} users={users || []}/>
        <List list={list || []} users={users ||[]} loading={isLoading}/>
    </div>)
};

export default ProjectList;
