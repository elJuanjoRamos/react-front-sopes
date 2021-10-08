import React from 'react'
import './Navbar.css'

const Navbar = ({ activ, activ2, activ3, activ4 }) => {
    return (
        <>
          <nav className="navbar navbar-expand navbar-light bg-white">
        <div className="container">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className={ "nav-item " + activ }>
                        <a href="/" className="nav-link">
                            <svg viewBox="0 0 24 24">
                                <g>
                                    <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path>
                                    <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li className={ "nav-item " + activ2 }>
                        <a href="/sql" className="nav-link">
                        <i className="fa fa-database"></i>
                        </a>
                    </li>
                    <li className={ "nav-item " + activ3 }>
                        <a href="/azure" className="nav-link">
                        <i className="fa fa-windows"></i>
                        </a>
                    </li>
                    <li className={ "nav-item " + activ4 }>
                        <a href="/mensajes" className="nav-link">
                            <svg viewBox="0 0 24 24">
                                <g>
                                    <path
                                        d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z">
                                    </path>
                                </g>
                            </svg>
                        </a>
                    </li>
                </ul>
                <form action="" className="form-inline w-100 d-none d-md-block ml-2">
                    <input type="text" className="form-control form-control-sm rounded-pill search border-0 px-3 w-100" placeholder="Search Twitter"/>
                </form>
                <ul className="navbar-nav d-none d-md-block">
                    <li className="nav-item">
                    </li>
                </ul>
            </div>
        </div>
    </nav>  
        </>
    )
}

export default Navbar
