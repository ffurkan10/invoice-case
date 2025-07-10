import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices, setSelectedInvoice } from '../../features/invoice/invoiceSlice'
import { Button, Table } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { getInvoiceTableColumns } from '../../constants/invoiceTableColumns'

const InvoiceListPage = () => {
  const dispatch = useDispatch()
  const {list} = useSelector((state) => state.invoice);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchInvoices({
      "companyId": "01c880ca-46b5-4699-a477-616b84770071",
      "documentType": "OUTGOING",
      "endDate": "2025-07-04T08:31:10.422Z",
      "page": 0,
      "size": 20,
      "startDate": "2025-06-27T00:00:00.000Z",
      "referenceDocument": "",
      "type": null,
      "status": null,
      "paymentStatus": null,
      "isDeleted": false
    }))
  }, [ dispatch ])

  const handleDetail = (invoice) => {
    dispatch(setSelectedInvoice(invoice));
    navigate(`/invoice/${invoice.id}`);
  };

  const columns = getInvoiceTableColumns(t, handleDetail)

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={list}
      pagination={false}
      onRow={(record) => ({
        onClick: () => handleDetail(record),
        style: { cursor: 'pointer' }
      })}
    />
  )
}

export default InvoiceListPage