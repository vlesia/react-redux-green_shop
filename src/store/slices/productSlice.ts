
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../type/Product';
import { fetchData } from '../../utils/apiClient';


interface ProductsState {
  products: Product[];
  filter: 'all' | 'fruit' | 'vegetable';
  query: string;
  loading: boolean;
  error: string;
  initialized: boolean;
}

const initialState: ProductsState = {
  products: [],
  filter: 'all',
  query: '',
  loading: false,
  error: '',
  initialized: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setFilter(state, action: PayloadAction<'all' | 'fruit' | 'vegetable'>) {
      state.filter = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.initialized = true;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Oops! Something went wrong.';
    });
  },
});

export const { setProducts, setFilter, setQuery } = productSlice.actions;

export default productSlice.reducer;

export const init = createAsyncThunk('products/fetch', () => {
  return fetchData();
});
