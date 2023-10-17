
import './App.css'
import { ToolBar } from "./widget";
import { Footer } from "./component/Footer";
import { Price } from './widget/price';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { PageIndicator } from './widget/pageindicator';
import { PDetails } from './component/PDetails';
const App = () => {

  const navigate = useNavigate()


  return (
    <div className="App">
      <div id="container">
        <ToolBar />
        <div style={{ clear: 'both' }}>
          <Routes>
            <Route path='/' element={<div ><div style={{ display: 'flex', flexWrap: 'wrap' }}>

              {
                [{ title: '1', color: 'red', total: 78.23, oldTotal: 78.99 },
                { title: '1', color: 'green', total: 71.99, oldTotal: 78.99 },
                { title: '1', color: 'yellow', total: 12.6, oldTotal: 19.99 },
                { title: '1', color: 'red', total: 78.12, oldTotal: 79.99 },
                { title: '1', color: 'green', total: 78, oldTotal: 79 },
                { title: '1', color: 'yellow', total: 178.9 },
                { title: '1', color: 'red', total: 12.1 },
                { title: '1', color: 'green', total: 71.99 },
                { title: '1', color: 'yellow', total: 12.6 },
                { title: '1', color: 'red', total: 78.12 },
                { title: '1', color: 'green', total: 78 },
                { title: '1', color: 'yellow', total: 178.9 },
                { title: '1', color: 'red', total: 12.1 },]
                  .map((element) => {
                    return <div onClick={() => {
                      navigate('/detail')
                    }} style={{ margin: '20px', cursor: 'pointer', width: '300px', height: '360px' }}>
                      <img width={300} src='https://i5.walmartimages.com/seo/Hocus-Pocus-Girls-Halloween-Sweatshirt-Sizes-4-16_fb77048d-35b0-4e53-b9da-87c6864f48fd.5a65eaf861e4e665bddbf27c9dee6f60.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF' />

                      <Price unit='$' value={element.total} oldValue={element.oldTotal} />
                      <p style={{ color: '#46474a', padding: '10px 0px' }}>Wonder Nation Toddlers Unisex Halloween T-Shirt, Sizes 12M-5T</p>

                    </div>
                  })
              }

            </div>
              <div style={{ textAlign: 'center', alignContent: 'center', padding: '20px 0px' }}>
                <PageIndicator total={10} current={2} />
              </div>
            </div>
            }></Route>
            <Route path='/detail' element={<PDetails />}></Route>
          </Routes>

          <Footer />
        </div>



      </div>
    </div>
  );
}

export default App;
