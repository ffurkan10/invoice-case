import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchInvoices = createAsyncThunk( 'invoices/fetchInvoices', async (body , thunkAPI) => {
    try {
      const response = await axios.post('https://api-dev.docnova.ai/invoice/search', body, {
          headers: { 'R-Auth': thunkAPI.getState().auth.jwt }
      });
      
      console.log('invoices:', response.data);
      
      return response.data.invoices.content;
    } catch (error) {
      console.error('error:', error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
    list : [],
    selectedInvoice: null,
    isLoading: false,
    error: null
}

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setSelectedInvoice(state, action) {
      state.selectedInvoice = action.payload;
    },
    setInvoiceError(state, action) {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const { setSelectedInvoice, setInvoiceError } = invoiceSlice.actions;

export default invoiceSlice.reducer;
