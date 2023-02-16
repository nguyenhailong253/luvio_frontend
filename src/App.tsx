import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginModule from './modules/login/LoginModule'
import NotFound from './modules/notfound/NotFoundModule'
import SignupModule from './modules/signup/SignupModule'
import store from './redux/store'

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginModule />}/>
        <Route path="/signup" element={<SignupModule />}/>
        <Route path='/profiles/create'/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// INFO: Can also use redirect https://stackoverflow.com/a/72090967/8749888

export default App
