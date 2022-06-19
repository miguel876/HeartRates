import { FC } from 'react'
import { useRoutes } from 'react-router-dom';
import { HeartRatesChart } from './pages/heartrates/HeartRatesChart';
import { HeartRatesTable } from './pages/heartrates/HeartRatesTable';
import { Layout } from './pages/Layout';

export const Routes:FC = () => {
    let routes = useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: '/chart',
              element: <HeartRatesChart data={[]} type={''}/>,
            },
            {
              path: '/table',
              element: <HeartRatesTable data={[]} tableRows={10}/>,
            }
          ]
        },
        {
          path: '*',
          element: <Layout />,
        }
      ]);

    return routes
}
