import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';

const GoBack = ({text}) => {

    const navigate = useNavigate();

  return (
    <div style={{ marginBottom: 20 }}>
        <Button style={{padding: 0}} icon={<LeftOutlined />} onClick={() => navigate(-1)} type='link'>{text}</Button>
    </div>
  )
}

export default GoBack