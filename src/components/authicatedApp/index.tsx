import styled from '@emotion/styled';
import { Button } from 'antd';
import * as React from 'react';
import { Row } from '../lib/lib';
import ProjectList from '../Project';
import { ReactComponent as SoftwareLogo } from "../../assets/software-logo.svg"
import { Navigate, Route, Routes } from "react-router"
import ProjectScreen from '../ProjectScreen';
interface IAuthicatedProps {
}

const Authicated: React.FunctionComponent<IAuthicatedProps> = (props) => {
  return (<Container>
    <PageHeader />
    {/* <ProjectList /> */}
    <Routes>
      <Route path="/projects" element={<ProjectList/>}/>
      <Route path="/projects/:projectId/*" element={<ProjectScreen/>}/>
    </Routes>
  </Container>)
};

const PageHeader = () => {
  return <Header between={true}>
    <HeaderLeft gap={true}>
      <SoftwareLogo width={"18rem"} color={'rgba(38,132,255)'} />
      <h2>项目</h2>
      <h2>用户</h2>
      <h2>another</h2>
    </HeaderLeft>
    <HeaderRight>
      <Button type='link'>登出</Button>
    </HeaderRight>
  </Header>
}

const Container = styled.div`
display: grid;
grid-template-rows: 6rem 1fr;
height: 100vh;
`
const Header = styled(Row)`

`
const HeaderLeft = styled(Row)`
display: flex;
align-items: center;
`
const HeaderRight = styled.div`
margin-right: 50px;
`
export default Authicated;
