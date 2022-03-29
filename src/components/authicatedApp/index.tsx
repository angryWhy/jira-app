import styled from '@emotion/styled';
import * as React from 'react';
import ProjectList from '../Project';

interface IAuthicatedProps {
}

const Authicated: React.FunctionComponent<IAuthicatedProps> = (props) => {
  return (<Main>
    <PageHeader />
    <ProjectList />
  </Main>)
};


const PageHeader = styled.header`
background-color: gray;
 height: 6rem;
 `
const Main = styled.main`
height: calc(100vh - 6rem);
`
export default Authicated;
