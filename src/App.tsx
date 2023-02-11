import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginModule from './modules/login/LoginModule'
import SignupModule from './modules/signup/SignupModule'
import store from './redux/store'

const App: React.FunctionComponent = () => (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginModule />}/>
          <Route path="/signup" element={<SignupModule />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
)

export default App
