import { Dropdown, Space } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = ({ key }) => {
    i18n.changeLanguage(key);
  };

  const items = [
    { label: '🇹🇷 Türkçe', key: 'tr' },
    { label: '🇺🇸 English', key: 'en' },
  ];

  return (
    <Dropdown menu={{ items, onClick: handleChange }}>
      <Space>
        <GlobalOutlined />
        {i18n.language === 'tr' ? 'Türkçe' : 'English'}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default LanguageSelector;
