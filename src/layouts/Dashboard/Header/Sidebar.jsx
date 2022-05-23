import { useNavigate } from 'react-router-dom';
const Sidebar = () => {

    let navigate = useNavigate();
    return (
        <>

            <div className="iq-sidebar  sidebar-default ">
                <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
                    <a style={{cursor:'pointer'}} onClick={() => navigate('/')} className="header-logo">
                        <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo" alt="logo" />
                        <h5 className="logo-title light-logo ml-3">POSDash</h5>
                    </a>
                    <div className="iq-menu-bt-sidebar ml-0">
                        <i className="ri-menu-line wrapper-menu"></i>
                    </div>
                </div>
                <div className="data-scrollbar" data-scroll="1">
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            <li className="active">
                                <a style={{cursor:'pointer'}} onClick={() => navigate('/')} className="svg-icon">
                                    <svg className="svg-icon" id="p-dash1" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path
                                            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                        </path>
                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                    </svg>
                                    <span className="ml-4">Dashboards</span>
                                </a>
                            </li>
                            <li className=" ">
                                <a href="#product" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <svg className="svg-icon" id="p-dash2" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    <span className="ml-4">Products</span>
                                    <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="10 15 15 20 20 15"></polyline>
                                        <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                    </svg>
                                </a>
                                <ul id="product" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>List Product</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Add Product</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" ">
                                <a href="#category" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <svg className="svg-icon" id="p-dash3" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                    <span className="ml-4">Categories</span>
                                    <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="10 15 15 20 20 15"></polyline>
                                        <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                    </svg>
                                </a>
                                <ul id="category" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>List Category</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Add Category</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" ">
                                <a href="#sale" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <svg className="svg-icon" id="p-dash4" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                    </svg>
                                    <span className="ml-4">Sale</span>
                                    <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="10 15 15 20 20 15"></polyline>
                                        <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                    </svg>
                                </a>
                                <ul id="sale" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>List Sale</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Add Sale</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" ">
                                <a href="#return" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <svg className="svg-icon" id="p-dash6" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="4 14 10 14 10 20"></polyline>
                                        <polyline points="20 10 14 10 14 4"></polyline>
                                        <line x1="14" y1="10" x2="21" y2="3"></line>
                                        <line x1="3" y1="21" x2="10" y2="14"></line>
                                    </svg>
                                    <span className="ml-4">Returns</span>
                                    <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="10 15 15 20 20 15"></polyline>
                                        <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                    </svg>
                                </a>
                                <ul id="return" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>List Returns</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Add Return</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className=" ">
                                <a href="#people" className="collapsed" data-toggle="collapse" aria-expanded="false">
                                    <svg className="svg-icon" id="p-dash8" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                    <span className="ml-4">People</span>
                                    <svg className="svg-icon iq-arrow-right arrow-active" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <polyline points="10 15 15 20 20 15"></polyline>
                                        <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                                    </svg>
                                </a>
                                <ul id="people" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Customers</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Add Customers</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Users</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Add Users</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Suppliers</span>
                                        </a>
                                    </li>
                                    <li className="">
                                        <a style={{cursor:'pointer'}} onClick={() => navigate('/')}>
                                            <i className="las la-minus"></i><span>Add Suppliers</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="">
                                <a href="page-report.html" className="">
                                    <svg className="svg-icon" id="p-dash7" width="20" height="20"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                    <span className="ml-4">Reports</span>
                                </a>
                                <ul id="reports" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-3"></div>
                </div>
            </div>
        </>
    )

}

export default Sidebar;