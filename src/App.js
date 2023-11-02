import React from 'react';
import { StateContextProvider } from './context';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Publish from './components/Publish';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Newrecord from './components/Records';
import Dashboard from './components/Dashboard'
import Details from './components/Details'
import DataMarket from './components/DataMarket'
import Rewards from './components/Rewards'
import { ThirdwebProvider } from "@thirdweb-dev/react";



const App = () => {
  return (
    <div className='overflow-hidden'>
      <StateContextProvider>
        <Navbar />
        <ThirdwebProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Publish' element={<Publish />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/records' element={<Newrecord />} />
            <Route path='/records/details' element={<Details />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/rewards' element={<Rewards />} />
            <Route path='/datamarket' element={<DataMarket />} />
          </Routes>
        </ThirdwebProvider>
        <Footer />
      </StateContextProvider>
    </div>
  )
}

export default App;