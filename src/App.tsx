import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './modules/footer/FooterModule'
import LoginModule from './modules/login/LoginModule'
import NavBarModule from './modules/nav/NavBarModule'
import NotFound from './modules/notfound/NotFoundModule'
import ProfileListModule from './modules/profile/list/ProfileListModule'
import SignupModule from './modules/signup/SignupModule'
import store from './redux/store'

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <NavBarModule />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginModule />}/>
        <Route path="/signup" element={<SignupModule />}/>
        <Route path='/profiles' element={<ProfileListModule />}/>
        <Route path='/profiles/:id' element={<ProfileListModule />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </Provider>
)

// INFO: Can also use redirect https://stackoverflow.com/a/72090967/8749888

export default App
