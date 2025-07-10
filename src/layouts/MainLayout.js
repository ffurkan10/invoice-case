import React from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import HeaderBar from '../components/layout/Header'
import { Layout } from 'antd';
const { Content } = Layout;

const MainLayout = () => {

  const dispatch = useDispatch()

  return (
    <Layout>
      <HeaderBar />
      <Content style={{ padding: '0 50px', marginTop: 40, minHeight: 'calc(100vh - 40px)' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default MainLayout