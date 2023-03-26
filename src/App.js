
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Accueil from './pages/accueil/Accueil'
import ListeProduits from './pages/listeproduits/ListeProduits';
import ProductPage from './pages/productpage/ProductPage';

function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Accueil /> },
    { path: '/boutique', element: <ListeProduits title="Boutique" /> },
    { path: '/contact', element: <div>error404</div> },
    { path: '/a-propos-de-moi', element: <div>error404</div> },
    { path: '/panier', element: <div> error404</div> },
    { path: '/produit/:id', element: <ProductPage /> },
    { path: '/login', element: <div>error404</div> },
    { path: '/register', element: <div>error404</div> },
    { path: '*', element: <div>error404</div> },
    { path: '/nouveautes', element: <ListeProduits title="Nouveautés" /> },
    { path: '/pret-a-porter', element: <ListeProduits title="Pret à porter" /> },
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
