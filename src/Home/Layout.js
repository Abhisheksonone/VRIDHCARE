import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Navigation/Footer';
import Header from '../Navigation/Header';


function Layout(props) {
    return (
        <div>
        
            <Header></Header>
        <div>
            <Outlet></Outlet>
        </div>
        
            <Footer></Footer>
       
        </div>    
        
    );
}

export default Layout;