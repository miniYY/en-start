
import './App.css'
import { ToolBar } from "./widget";
import { Footer } from "./component/Footer";
import { Price } from './widget/price';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { PageIndicator } from './widget/pageindicator';
import { PDetails } from './component/PDetails';
import { Products } from './page';
const App = () => {



  return (
    <div className="App">
      <div id="container">
        <ToolBar />
        <div style={{clear: 'both', marginTop: '55px' }} >
          <Routes>
            <Route path='/' element={<Products />}></Route>
            <Route path='/shop/*' element={<Products />}></Route>
            <Route path='/detail' element={<PDetails />}></Route>
          </Routes>

          <Footer />
        </div>



      </div>
    </div>
  );
}

export default App;
