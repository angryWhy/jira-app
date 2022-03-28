import * as React from 'react';
import { useState } from 'react';
import ProjectList from '../Project/index';
import Login from '../Login/index';
import { Button, Card } from 'antd';

interface IUnauthAppProps {
}

const UnauthApp: React.FunctionComponent<IUnauthAppProps> = (props) => {
    const style = {
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
    const [isRegister, setIsRegister] = useState(true)
    return (
        <div style={{...style}}>
            <Card>
                {
                    isRegister ? <Login /> : <ProjectList />
                }
                <Button onClick={e => { setIsRegister(!isRegister) }}>进入ProjectList</Button>
            </Card>
        </div>
    )
};

export default UnauthApp;
