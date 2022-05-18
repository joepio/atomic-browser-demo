import './App.css'
import {Agent, Store, StoreContext} from '@tomic/react'
import Browser from './Browser';

const store = new Store({});

const agent = Agent.fromSecret("eyJzdWJqZWN0IjoiaHR0cHM6Ly9hdG9taWNkYXRhLmRldi9hZ2VudHMvUDJ6Z29jMkNFSEtneEJDVlNwQXY4RXA0TktMdEhHUlVzZmY5V3MvVVR1bz0iLCJwcml2YXRlS2V5IjoiMVRCUGVPT3BaYXQ4ditWK1JEbmJaUDZLekI5UHBKNFdqbGNHdGdNSHFpVT0iLCJwdWJsaWNLZXkiOiJQMnpnb2MyQ0VIS2d4QkNWU3BBdjhFcDROS0x0SEdSVXNmZjlXcy9VVHVvPSJ9")
store.setAgent(agent)

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
