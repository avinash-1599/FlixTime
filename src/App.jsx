import React from 'react'
import './index.css'
import Body from './components/Body'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import appStore, { persistor } from "./utils/appStore";

function App() {

  return (
      <Provider store={appStore}>
      <PersistGate loading={null} persistor={persistor}>
            <Body />
        </PersistGate>
      </Provider>
  )
}

export default App
