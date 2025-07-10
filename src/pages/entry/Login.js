import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form, message, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import { login, setError } from '../../features/auth/authSlice';
import { useEffect } from 'react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const { error } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    dispatch(login(values))
  };

  useEffect(() => {
    if (error) {
      message.error(error);
      setTimeout(() => {
        dispatch(setError(null));
      }, 3000); 
    } 
  }, [error])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f2f5'
    }}>
      <Card
        title={t('login')}
        style={{ width: 350, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
      >
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label={t('email')} name="email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label={t('password')} name="password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} block>
            {t('login')}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
