import { Form, Input, Button, Typography } from "antd";
import { useStore } from "../../zustand";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api";
const { Title } = Typography;

interface LoginForm {
  username: string;
  password: string;
}

const login = async (username: string, password: string) => {
  const response = await api.post("/auth/login", { username, password });
  return response.data;
};

const Login = () => {
  const { setToken } = useStore();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (values: LoginForm) => {
    try {
      const data = await login(values.username, values.password);
      setToken(data.accessToken);
      navigate("/");
    } catch (err) {
      setError("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <Title level={3} className="text-center !mb-6">
          Login
        </Title>
        <Form<LoginForm> layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
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
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              size="large"
              placeholder="Enter password"
              className="!rounded-lg"
            />
          </Form.Item>
          {error && (
            <p className="text-red-500 text-center text-sm mb-4">{error}</p>
          )}
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
  );
};

export default Login;
