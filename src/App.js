import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/Router/Route';

function App() {
  return (
    <div className="App bg-black text-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
