import { Form, Input, Button, Typography } from "antd";
import axios from "axios";
import { useState } from "react";

const { Title } = Typography;

interface LoginForm {
  username: string;
  password: string | number; 
}
const Login = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>(""); 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const 
}

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
          <Title level={3} className="text-center !mb-6">
            Login
          </Title>
          <Form<LoginForm> layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter username"
                className="!rounded-lg"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Enter password"
                className="!rounded-lg"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full !rounded-lg bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <p className="text-center text-sm text-gray-500">
            Don’t have an account?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
