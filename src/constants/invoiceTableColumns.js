import { Button } from 'antd';

export const getInvoiceTableColumns = (t, handleDetail) => [
  {
    title: t('invoiceNumber'),
    dataIndex: 'invoiceNumber',
    key: 'invoiceNumber',
  },
  {
    title: t('supplierName'),
    dataIndex: 'supplierName',
    key: 'supplierName',
  },
  {
    title: t('customerName'),
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: t('issueDate'),
    dataIndex: 'issueDate',
    key: 'issueDate',
    render: (text) => new Date(text).toLocaleDateString(),
  },
  {
    title: t('payableAmount'),
    key: 'payableAmount',
    render: (_, record) => `${record.payableAmount} ${record.currency}`,
  },
  {
    title: t('paymentStatus'),
    key: 'paymentStatus',
    render: (_, record) => record.paymentDetails?.paymentStatus || 'Belirsiz',
  },
  {
    title: t('actions'),
    key: 'action',
    render: (_, record) => (
      <Button type="primary" onClick={() => handleDetail(record)}>
        {t('detailButton')}
      </Button>
    ),
  },
];
