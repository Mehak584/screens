import { RouterProvider } from 'react-router-dom';
import './App.css';
import Step1 from './Pages/Step1';
import Step2 from './Pages/Step2';
import Step3 from './Pages/Step3';
import Step4 from './Pages/Step4';
import Step5 from './Pages/Step5';
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Step1/>  
  },
  
  {
    path: "/2",
    element:  <Step2/>
  },
  {
    path: "/3",
    element:  <Step3/>
  },
  {
    path: "/4",
    element:  <Step4/>
  },
  {
    path: "/5",
    element:  <Step5/>
  },
 
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
