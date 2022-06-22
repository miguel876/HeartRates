import { FC } from 'react'
import { useRoutes } from 'react-router-dom';
import { HeartRatesChartDetail } from './pages/heartrates/detail/HeartRatesChartDetail';
import { HeartRatesTableDetail } from './pages/heartrates/detail/HeartRatesTableDetail';
import { Homepage } from './pages/Homepage';

export const Routes:FC = () => {
    let routes = useRoutes([
        {
          children: [
            {
              path: '/',
              element: <Homepage />,
            },
            {
              path: 'chart',
              element: <HeartRatesChartDetail />,
            },
            {
              path: 'table',
              element: <HeartRatesTableDetail />,
            }
          ]
        },
        {
          path: '*',
          element: <Homepage />,
        }
      ]);

    return routes
}
