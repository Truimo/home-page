import Header from "../components/header";
import Footer from "../components/footer";
import {Outlet} from "react-router-dom";

function Index() {
    return (
        <div className='container'>
            <div className='container_inner'>
                <Header/>
                <main className='main'>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default Index
