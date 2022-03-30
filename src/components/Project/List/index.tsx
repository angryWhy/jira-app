import { Table } from 'antd';
import dayjs from 'dayjs';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Project, User } from '../../../types/projectType';

interface IListProps {
  list: Project[],
  users: User[],
  loading:boolean
}

const List: React.FunctionComponent<IListProps> = (props) => {
  const { list, users,loading } = props
  console.log(list);
  return (<Table columns={[
    {
      title: "名称",
      dataIndex: "name",
      sorter:(a,b)=>a.name.localeCompare(b.name),
      render(value,project){
        return<Link to={`${project.id}`}>{project.name}</Link>
      }
    },
    {
      title:"部门",
      dataIndex:"organization"
    },
    {
      title:"负责人",
      render(value,project){
        return<span>
          {users.find((user: any) => user.id === project.personId)?.name || "未知"}
        </span>
      }
    },
    {
      title:"创建时间",
      render(value,project){
        return<span>
          {
            project.created?dayjs(project.created).format("YYYY-MM-DD"):"无"
          }
        </span>
      }
    }

  ]} dataSource={list} pagination={false} loading={loading} />)
  // return (
  //   <div>
  //     <table>
  //       <thead>
  //         <tr>
  //           <th>名称</th>
  //           <th>负责人</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {
  //           list.map((item: Project, idnex: number) => {
  //             return <tr key={item.id}>
  //               <td>{item.name}</td>
  //               <td>{users.find((user: any) => user.id === item.personId)?.name || "未知"}</td>
  //             </tr>
  //           })
  //         }
  //       </tbody>
  //     </table>
  //   </div>
  //)
};

export default List;
