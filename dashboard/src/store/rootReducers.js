import OrderReducer from "./Reducers/OrderReducer";
import authReducer from "./Reducers/authReducer";
import bannerReducer from "./Reducers/bannerReducer";
import categoryReducer from "./Reducers/categoryReducer";
import chatReducer from "./Reducers/chatReducer";
import dashboardReducer from "./Reducers/dashboardReducer";
import productReducer from "./Reducers/productReducer";
import sellerReducer from "./Reducers/sellerReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: sellerReducer,
  chat: chatReducer,
  order: OrderReducer,
  dashboard: dashboardReducer,
  banner: bannerReducer,
};
export default rootReducer;
