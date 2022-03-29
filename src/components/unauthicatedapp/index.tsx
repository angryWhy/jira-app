import * as React from 'react';
import { useState } from 'react';
import ProjectList from '../Project/index';
import Login from '../Login/index';
import { Button, Card } from 'antd';
import styled from "@emotion/styled"

import logo from "../../assets/logo.svg"
import right from "../../assets/right.svg"
import left from "../../assets/left.svg"

interface IUnauthAppProps {
}

const UnauthApp: React.FunctionComponent<IUnauthAppProps> = (props) => {
    const [isRegister, setIsRegister] = useState(true)
    return (
        <div>
        <Container >
            <Header />
            <BackGround />
            <ShadowCard>
            {
                isRegister ? <Login /> : <ProjectList /> 
            }
                <Button onClick={e => { setIsRegister(!isRegister) }}>进入ProjectList</Button>
            </ShadowCard>
        </Container>
        </div>
    )
};

const Header = styled.header`
background: url(${logo}) no-repeat center;
padding: 5rem 0;
background-size: 8rem;
width: 100%;
`
const BackGround = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: left bottom,right bottom;
background-size: calc(((100vw-40rem)/2)-3.2rem),calc(((100vw-40rem)/2)-3.2rem),cover;
background-image: url(${left}),url(${right});
`

const ShadowCard = styled(Card)`
width: 40rem;
min-height: 56rem;
padding: 3.2rem 4rem;
border-radius: 0.3rem;
box-shadow: rgba(0,0,0,0.1) 0 0 10px;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
`


export default UnauthApp;
