import * as React from 'react';
import { Link,  Route, Routes } from 'react-router-dom';
import { Navigate, useHref, useMatch, useNavigate } from 'react-router';
import EpicScreen from '../EpicScreen';
import KanbanScreen from '../KanbanScreen';

interface IProjectScreenProps {
}

const ProjectScreen: React.FunctionComponent<IProjectScreenProps> = (props) => {
  let navigate = useNavigate()
  return(<div>
      <h2>ProjectList</h2>
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path={`/kanban`} element={<KanbanScreen/>}/>
        <Route path={`/epic`} element={<EpicScreen/>}/>
        {/* 报错 */}
       
        
        {/* <Navigate to={window.location.pathname + "/ kanban"}/> */}
      </Routes>
      {/* {navigate(`${window.location.pathname}/kanban`, { replace: true })} */}
  </div>)
};

export default ProjectScreen;
