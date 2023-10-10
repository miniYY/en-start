
import './App.css'
import React from 'react'
import { ToolBar } from "./widget";
import { Footer } from "./component/Footer";
import Modal from './widget/dialog/modal';

const App = () => {



  return (
    <div className="App">
      <div id="container">
        <ToolBar />
        <div style={{ clear: 'both' }}>
          <div >
            <button onClick={() => {
              Modal.show({
                title: '123',
                close: true,
                operateAble: true,
                cancel: false,
                ok: true
              })
            }}>click</button>
            <div style={{ height: '200px' }}> </div>

            <div style={{ height: '200px' }}> </div>

            <div style={{ height: '200px' }}> </div>

            <div style={{ height: '200px' }}> </div>

            <div style={{ height: '200px' }}> </div>

            <div style={{ height: '200px' }}> </div>
          </div>
          <Footer />
        </div>



        {/* <GirdView
          column={5}
          data={
            [{ value: 'bulletin', introduce: '公告/公布', talk: '/ˈbʊlətɪn/' }
              , { value: 'efficient', introduce: '有效率的/效率高的', talk: '/ɪˈfɪʃnt/' }
              , { value: 'acclaim' }
              , { value: 'acknowledge' }
              , { value: 'consistent' }
              , { value: 'expose' }
              , { value: 'firm' }
              , { value: 'hollow' }
              , { value: 'landscape' }
              , { value: 'minimum' }
              , { value: 'participant' }
              , { value: 'purchase' }
              , { value: 'reserve' }
              , { value: 'representative' }
              , { value: 'wealthy' }
              , { value: 'universe' }
              , { value: 'threaten' }
              , { value: 'sticky' }
              , { value: 'species' }
              , { value: 'silence' }
              , { value: 'resist' }
              , { value: 'regret' }
              , { value: 'pregnant' }
              , { value: 'participant' }
              , { value: 'obligation' }
              , { value: 'maintain' }
              , { value: 'latest' }
              , { value: 'inner' }
              , { value: 'hesitate' }
              , { value: 'examination' }]} /> */}
      </div>
    </div>
  );
}

export default App;
