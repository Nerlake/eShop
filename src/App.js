
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Accueil from './pages/accueil/Accueil'
import ListeProduits from './pages/listeproduits/ListeProduits';
import ProductPage from './pages/productpage/ProductPage';
import Apropos from './pages/apropos/Apropos';
import Contact from './pages/contact/Contact';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Accueil /> },
    { path: '/boutique', element: <ListeProduits title="Boutique" /> },
    { path: '/contact', element: <Contact /> },
    { path: '/a-propos-de-moi', element: <Apropos /> },
    { path: '/panier', element: <div> error404</div> },
    { path: '/produit/:id', element: <ProductPage /> },
    { path: '/login', element: <div>error404</div> },
    { path: '/register', element: <div>error404</div> },
    { path: '*', element: <div>error404</div> },
    { path: '/jupes', element: <ListeProduits title="Jupes" /> },
    { path: '/shorts', element: <ListeProduits title="Shorts" /> },
    { path: '/hauts', element: <ListeProduits title="Hauts" /> },
    { path: '/robes', element: <ListeProduits title="Robes" /> },
    { path: '/pantalons', element: <ListeProduits title="Pantalons" /> },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
