import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import SignUp from '../pages/SignUp'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsandConditions from '../pages/TermsandConditions'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import Verify from '../pages/Verify'
import ResendOtp from '../pages/ResendOtp'
import SignIn from '../pages/SignIn'
import Footer from '../components/Footer'
import UserProfile from '../pages/UserProfile'
import ChangePassword from '../components/ChangePassword'
import Contact from '../pages/Contact'
import News from '../pages/News'
import Categories from '../pages/Categories'
import Subscription from '../pages/Subscription'
import Me from '../pages/Me'



export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
            <Route path='/termsandconditions' element={<TermsandConditions/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/resetpassword' element={<ResetPassword/>}/>
            <Route path='/verify' element={<Verify/>}/>
            <Route path='/resendotp' element={<ResendOtp/>}/>
            <Route path='/user' element={<UserProfile/>}/>
            <Route path='/changepassword' element={<ChangePassword/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/categories' element={<Categories/>}/>
            <Route path='/subscription' element={<Subscription/>}/>
            <Route path='/me' element={<Me/>}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}
