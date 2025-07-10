import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import invoiceReducer from "../features/invoice/invoiceSlice";

const Store = configureStore({
  reducer: {
    auth: authReducer,
    invoice: invoiceReducer
  },
});


export default Store;