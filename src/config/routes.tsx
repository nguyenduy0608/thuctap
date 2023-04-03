import AccountPage from "../features/App/account/page";
import CustomerPage from "../features/App/customer/pages";
import HomePage from "../features/App/home/pages";
import NotificationPage from "../features/App/notification/page";
import OrderPage from "../features/App/order/page";
import OrderDetail from "../features/App/order/page/OrderDetail";
import ProductPage from "../features/App/product/page";
import ProductDetail from "../features/App/product/page/productDetail";
import ReportPage from "../features/App/report/page";
import LoginPage from "../features/Auth/login";
import NotFoundPage from "../features/NotFound";

export const routerPage = {
  // public

  // private
  home: "/",
  customer: "/customer",
  product: "/product",
  notification: "/notification",
  news: "/news",
  account: "/account",
  order: "/order",
  report: "/report",
  productdetail: "/productdetail",
  //auth
  orderdetail: "/orderdetail",
  login: "/login",
  resister: "/resister",
};
const publicRoutes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const privateRoutes = [
  {
    path: routerPage.customer,
    element: <CustomerPage />,
  },
  {
    path: routerPage.home,
    element: <HomePage />,
  },
  {
    path: routerPage.account,
    element: <AccountPage />,
  },
  {
    path: routerPage.notification,
    element: <NotificationPage />,
  },
  {
    path: routerPage.order,
    element: <OrderPage />,
  },
  {
    path: routerPage.product,
    element: <ProductPage />,
  },
  {
    path: routerPage.report,
    element: <ReportPage />,
  },
  {
    path: routerPage.orderdetail,
    element: <OrderDetail />,
  },
  {
    path: routerPage.productdetail,
    element: <ProductDetail />,
  },
];

const authRoutes = [
  {
    path: routerPage.login,
    element: <LoginPage />,
  },
  ...privateRoutes,
  ...publicRoutes,
];

export { privateRoutes, authRoutes };
