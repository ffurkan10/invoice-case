import { useSelector } from 'react-redux';
import { Descriptions, Tag, Typography, Empty, Divider } from 'antd';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import GoBack from '../../components/goBack';
const { Title } = Typography;

const InvoiceDetailPage = () => {
  const {selectedInvoice} = useSelector((state) => state.invoice);
  const {t} = useTranslation()

  if (!selectedInvoice) {
    return (
      <div style={{ padding: 24 }}>
        <Empty description="Fatura verisi bulunamadı." />
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 32 }}>

      <GoBack text={t("goBack")} />

      <Title level={3}>{t("invoice")} #{selectedInvoice.invoiceNumber}</Title>

      <Divider orientation="left">{t("generalInfo")}</Divider>
      <Descriptions labelStyle={{ width: '40%' }} bordered column={1} size="middle">
        <Descriptions.Item label={t("status")}>
          <Tag color="blue">{selectedInvoice.status}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label={t("documentType")}>{selectedInvoice.documentType}</Descriptions.Item>
        <Descriptions.Item label={t("invoiceType")}>{selectedInvoice.type}</Descriptions.Item>
        <Descriptions.Item label={t("source")}>{selectedInvoice.source}</Descriptions.Item>
      </Descriptions>

      <Divider orientation="left">{t("supplier")}</Divider>
      <Descriptions labelStyle={{ width: '40%' }} bordered column={1} size="middle">
        <Descriptions.Item label={t("name")}>{selectedInvoice.supplierName}</Descriptions.Item>
        <Descriptions.Item label={t("taxNumber")}>{selectedInvoice.supplierVat}</Descriptions.Item>
        <Descriptions.Item label={t("country")}>{selectedInvoice.supplierCountryCode}</Descriptions.Item>
      </Descriptions>

      <Divider orientation="left">{t("customer")}</Divider>
      <Descriptions labelStyle={{ width: '40%' }} bordered column={1} size="middle">
        <Descriptions.Item label={t("name")}>{selectedInvoice.customerName}</Descriptions.Item>
        <Descriptions.Item label={t("taxNumber")}>{selectedInvoice.customerVat}</Descriptions.Item>
        <Descriptions.Item label={t("country")}>{selectedInvoice.customerCountryCode}</Descriptions.Item>
      </Descriptions>

      <Divider orientation="left">{t("dateInfo")}</Divider>
      <Descriptions labelStyle={{ width: '40%' }} bordered column={1} size="middle">
        <Descriptions.Item label={t("dateIssue")}>{moment(selectedInvoice.issueDate).format('DD/MM/YYYY')}</Descriptions.Item>
        <Descriptions.Item label={t("dateDue")}>{moment(selectedInvoice.dueDate).format('DD/MM/YYYY')}</Descriptions.Item>
        <Descriptions.Item label={t("createdAt")}>
          {moment(selectedInvoice.createdTime).format('DD/MM/YYYY')}
        </Descriptions.Item>
      </Descriptions>

      <Divider orientation="left">{t("amountInfo")}</Divider>
      <Descriptions labelStyle={{ width: '40%' }} bordered column={1} size="middle">
        <Descriptions.Item label={t("netAmount")}>
          {selectedInvoice.taxExclusiveAmount} {selectedInvoice.currency}
        </Descriptions.Item>
        <Descriptions.Item label={t("grossAmount")}>
          {selectedInvoice.taxInclusiveAmount} {selectedInvoice.currency}
        </Descriptions.Item>
        <Descriptions.Item label={t("amountPayable")}>
          <strong>{selectedInvoice.payableAmount} {selectedInvoice.currency}</strong>
        </Descriptions.Item>
      </Descriptions>

      <Divider orientation="left">Ödeme Durumu</Divider>
      <Descriptions labelStyle={{ width: '40%' }} bordered column={1} size="middle">
        <Descriptions.Item label={t("status")}>
          <Tag color="orange">{selectedInvoice.paymentDetails?.paymentStatus}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label={t("paidAmount")}>{selectedInvoice.paymentDetails?.paidAmount}</Descriptions.Item>
        <Descriptions.Item label={t("remainingAmount")}>{selectedInvoice.paymentDetails?.remainingAmount}</Descriptions.Item>
      </Descriptions>
    </div>
  );

}
export default InvoiceDetailPage;
