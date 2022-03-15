import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            {/* <header>
                <Link to="/">Home</Link>
                <Link to="/test">Test</Link>
            </header> */}

            <div className='container'>
                <Outlet />
            </div>

            {/* <p>qwerty</p> */}
        </>
    )
}

export default Layout