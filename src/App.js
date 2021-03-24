import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppBar from './HomeAndAbout/Components/Appbar'
import HomePage from './HomeAndAbout/page'

const PageReplacement = React.lazy(()=>import('./pageReplacement/page'));
const ProcessScheduling = React.lazy(()=>import('./processScheduling/page'));


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <AppBar/>
          <Route exact path='/OsXpert' component={HomePage} />
          
          <Suspense fallback={<p>...</p>}>
            <Switch>
                <Route path='/ProcessScheduling' component={ProcessScheduling} />
                <Route path='/PageReplacement' component={PageReplacement} />
            </Switch>
          </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
