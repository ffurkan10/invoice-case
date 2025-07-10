import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/entry/Login";
import InvoiceListPage from "./pages/invoice/InvoiceListPage";
import InvoiceDetailPage from "./pages/invoice/InvoiceDetailPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }>
            <Route index path="/invoices" element={<InvoiceListPage />} />
            <Route path="/invoice/:id" element={<InvoiceDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App