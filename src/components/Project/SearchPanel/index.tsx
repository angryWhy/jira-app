import { Form, Input, Select } from 'antd';
import * as React from 'react';

interface ISearchPanelProps {
    param:{
        name:string,
        personId:string
    },
    setParam:(param:ISearchPanelProps["param"])=>void,
    users:any
}
const {Option} = Select
const SearchPanel: React.FunctionComponent<ISearchPanelProps> = (props) => {
    const {param,setParam,users} = props

  return(
     
          <Form layout='inline' >
              <Form.Item name={""}>
              <Input type={"text"} 
                     value={param.name} 
                     onChange={e=>{setParam({...param,name:e.target.value})}}/>
              </Form.Item>
              <Form.Item>
              <Select value={param.personId}
                      onChange={value=>{setParam({...param,personId:value})}}   
              >
                  <Option value="">负责人</Option>
                  {
                      users.map( (user :any) => {
                          return <Option value={user.id} key={user.id}>{user.name}</Option>
                      })
                  }
              </Select>
              </Form.Item>
          </Form>
  )
};

export default SearchPanel;
