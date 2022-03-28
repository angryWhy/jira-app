import * as React from 'react';
import { useAuth } from '../../context/auth-context';

import { Button, Form, Input } from "antd"

interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const { login, user } = useAuth();
    //提交事件
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        login({ username, password })
    }
    return (<div>
        <div>
            {
                user ? <div>{user.name}</div> : null
            }
        </div>
        <Form onFinish={handleSubmit}>
            <Form.Item label="用户名" name={"username"} rules={[{ required: true, message: "用户名未输入" }]}>
                <Input type="text" id='username' placeholder='输入用户名' />
            </Form.Item>
            <Form.Item label="密码" name={"password"} rules={[{ required: true, message: "密码未输入" }]}>
                <Input type="password" id='password' placeholder='输入密码' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>登录</Button>
            </Form.Item>
        </Form>
    </div>)
};

export default Login;
