import './App.css'
import {Store, StoreContext} from '@tomic/react'
import Browser from './Browser';

const store = new Store({});

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <Browser />
      </div>
    </StoreContext.Provider>
  )
}

export default App
