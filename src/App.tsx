
import './App.css'
import { ToolBar } from "./widget";
import { Footer } from "./component/Footer";
import { Price } from './widget/price';

import { Route, Routes, useNavigate } from 'react-router-dom';
const App = () => {



  return (
    <div className="App">
      <div id="container">
        <ToolBar />
        <div style={{ clear: 'both' }}>
          <Routes>
            <Route path='/' element={<div ><div style={{ display: 'flex', flexWrap: 'wrap' }}>

              {
                [{ title: '1', color: 'red' }, { title: '1', color: 'green' }, { title: '1', color: 'yellow' },
                { title: '1', color: 'red' }, { title: '1', color: 'green' }, { title: '1', color: 'yellow' }
                  , { title: '1', color: 'red' }, { title: '1', color: 'green' }, { title: '1', color: 'yellow' }
                  , { title: '1', color: 'red' }, { title: '1', color: 'green' }, { title: '1', color: 'yellow' }]
                  .map((element) => {
                    return <div style={{ margin: '20px', cursor: 'pointer', width: '300px', height: '360px' }}>
                      <img width={300} src='https://i5.walmartimages.com/seo/Hocus-Pocus-Girls-Halloween-Sweatshirt-Sizes-4-16_fb77048d-35b0-4e53-b9da-87c6864f48fd.5a65eaf861e4e665bddbf27c9dee6f60.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' />

                      <Price unit='$' value={79.99} />
                      <p style={{ color: '#46474a', padding: '10px 0px' }}>Wonder Nation Toddlers Unisex Halloween T-Shirt, Sizes 12M-5T</p>

                    </div>
                  })
              }

            </div>
              <div style={{ textAlign: 'center', alignContent: 'center', padding: '20px 0px' }}>1,2,3,4,5</div>
            </div>
            }></Route>
            <Route path='/store' element={<div >store</div>}></Route>
          </Routes>

          <Footer />
        </div>



      </div>
    </div>
  );
}

export default App;
