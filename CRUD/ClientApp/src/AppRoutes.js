import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import ShopItem from './components/ShopItem';

const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
  {
    path: '/shop-item',
    element: <ShopItem />
  },

  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
