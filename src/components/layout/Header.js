import React from 'react';
import { Button, Layout, Flex, Avatar, Typography } from 'antd';
import LanguageSelector from '../language/LanguageSelector';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const { Header } = Layout;

const HeaderBar = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const { user } = useSelector((state) => state.auth);

  console.log(user);
  

  return (
    <Header style={{
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    }}>
      <Flex justify='space-between' align='center'>
        <Flex gap="middle" align='center'>
          <Avatar size="medium" icon={<UserOutlined />} />
          <Text strong>{user?.email}</Text>
        </Flex>
        <Flex gap="large" align='center'>
          <LanguageSelector />
          <Button onClick={() => dispatch(logout())} type="primary">{t("logout")}</Button>
        </Flex>
      </Flex>
    </Header>
  );
};

export default HeaderBar;
