import * as React from 'react';
import { useState } from 'react';
import ProjectList from '../Project/index';
import Login from '../Login/index';

interface IUnauthAppProps {
}

const UnauthApp: React.FunctionComponent<IUnauthAppProps> = (props) => {
    const [isRegister, setIsRegister] = useState(true)
  return(
      <div>
          {
              isRegister?<Login/> : <ProjectList/>
          }
          <button onClick={e=>{setIsRegister(!isRegister)}}>进入ProjectList</button>
      </div>
  )
};

export default UnauthApp;
