import './App.css';
import NavBar from './inc/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import MyStore from './components/MyStore';
import './components/style.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ProductReducer from './reducers/ProductReducer';
import ShowCart from './inc/ShowCart';
import Footer from './inc/Footer';
import SinglePage from './components/SinglePage';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import itemReducer from './reducers/itemReducer';
import SignUp from './inc/SignUp';
import SignIn from './inc/SignIn';


//Redux  Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // default to local storage for web
import { PersistGate } from 'redux-persist/integration/react'
// import persistReducer from 'redux-persist/es/persistReducer';


 
function App() {
  const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, itemReducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  // return (
    // <Provider store={store}>
    // <BrowserRouter>
      {/* <div> */}
        {/* <NavBar/> */}
        // <Routes>
        //   <Route path='/' element= {<Home/>} />
        //   <Route path='store' element= {<Store/>} />
        //   <Route path='showCart' element = {<ShowCart/>}/>
        //   <Route path='contact' element={<Contact/>}/>
        //   <Route path='store/:id' element={<SinglePage/>}/>
        //   <Route path='*' element={<PageNotFound/>}/>
        // </Routes>
        {/* <Footer/> */}
    {/* </div> */}
    {/* </BrowserRouter> */}
    // {/* </Provider> */}
  // );
  return (
    <Provider store = {store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <NavBar/>
        <Routes>
          <Route path='/' element= {<Home/>} />
          <Route path='store' element= {<MyStore/>} />
          <Route path='showCart' element = {<ShowCart/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='store/:id' element={<SinglePage/>}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='signin' element={<SignIn/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App;
