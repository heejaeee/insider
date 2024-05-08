import Navbar from './components/Navbar/Navbar';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PeoplePage from './pages/PeoplePage';

// router gonna be in here, i should consider changing the names of the pages so that they make more sense bc "PeoplePage" is not that satisfying

const router = createBrowserRouter([
  {
    path: '/',
    element: <PeoplePage />
  },
])


function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
