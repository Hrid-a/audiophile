import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductPage from "./pages/ProductPage";
import CheckOut from "./pages/CheckOut";
import Error from "./pages/Error";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/categories",
          element: <Category />,
        },
        {
          path: "/products/:productId",
          element: <ProductPage />
        },
        {
          path: "/checkout",
          element: <CheckOut />
        }
      ],
      errorElement: <Error />
    }
  ])

  return (

    <Provider store={store}>
      <RouterProvider router={router}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout />
        </PersistGate>
      </RouterProvider>
    </Provider>
  )
}

export default App
