import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom';
function RootLayout(){
    return(
        <div style={{textAlign:'center',color:''}}>
            <Header/>
            <div style={{minHeight:'75vh'}} className='container'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}
export default RootLayout;  