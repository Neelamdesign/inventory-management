import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios.js";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    search:"",
    filterCategory:"All",
    filterStatus:"All"
  },
  reducers: {
   setSearch:((state, action)=>{
    state.search = action.payload  
   }),
   setFilterCategory:((state, action)=>{
    state.filterCategory = action.payload  
   }),
   setFilterStatus:((state, action)=>{
    state.filterStatus = action.payload  
   })

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products.data = state.products.data.filter((item) => {
          return item._id !== action.payload.id;
        });
      })

      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = state.products.data.push(action.payload.formData);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products = state.products.data.map((items) => {
          if (items._id === action.payload.updatedId) {
            return (items = action.payload.updatedData);
          }
        });
      })
      .addCase(updateProducts.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      .addCase(UpdatesQuantity.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(UpdatesQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.products.data.map((item) => {
          if (item._id === action.payload.updatedId) {
            return item.stock = action.payload.Newquantity;
          }
        });
      })
      .addCase(UpdatesQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const getProducts = createAsyncThunk("/products/get", async () => {
  const response = await API.get("/products/");
  return response.data;
});

export const addProduct = createAsyncThunk(
  "/products/add",
  async (formData) => {
    const response = await API.post("/products/add", formData);
    return response.data;
  },
);

export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await API.delete(`/products/delete/${id}`);
  return { id };
});

export const updateProducts = createAsyncThunk(
  "products/update",
  async ({ updatedData, updatedId }) => {
    const response = await API.put(
      `/products/update/${updatedId}`,
      updatedData,
    );
    return response.data;
  },
);

export const UpdatesQuantity = createAsyncThunk(
  "quantity/increase",
  async ({ Newquantity, updatedId }) => {
    const response = await API.patch(
      `/products/update/${updatedId}/quantity`, {quantity:Newquantity}
    );
    return {updatedId, Newquantity , ...response.data}
  },
);

export const {setSearch, setFilterCategory, setFilterStatus} = ProductSlice.actions;

export default ProductSlice.reducer;
