const Topbar = () => {

    return (
        <>
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                            <i className="ri-menu-line wrapper-menu"></i>
                            <a href="index.html" className="header-logo">
                                <img src="../assets/images/logo.png" className="img-fluid rounded-normal" alt="logo" />
                                <h5 className="logo-title ml-3">POSDash</h5>

                            </a>
                        </div>
                        <div className="iq-search-bar device-search">
                            <form action="#" className="searchbox">
                                <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                                <input type="text" className="text search-input" placeholder="Search here..." />
                            </form>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-label="Toggle navigation">
                                <i className="ri-menu-3-line"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto navbar-list align-items-center">
                                    <li className="nav-item nav-icon search-content">
                                        <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown"
                                            aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-search-line"></i>
                                        </a>
                                        <div className="iq-search-bar iq-sub-dropdown dropdown-menu"
                                            aria-labelledby="dropdownSearch">
                                            <form action="#" className="searchbox p-2">
                                                <div className="form-group mb-0 position-relative">
                                                    <input type="text" className="text search-input font-size-12 /"
                                                        placeholder="type here to search..." />
                                                    <a href="#" className="search-link"><i className="las la-search"></i></a>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    <li className="nav-item nav-icon dropdown">
                                        <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton2"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                                                <path
                                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                </path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                            <span className="bg-primary"></span>
                                        </a>
                                        <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                            <div className="card shadow-none m-0">
                                                <div className="card-body p-0 ">
                                                    <div className="cust-title p-3">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h5 className="mb-0">All Messages</h5>
                                                            <a className="badge badge-primary badge-card" href="#">3</a>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 pt-0 pb-0 sub-card">
                                                        <a href="#" className="iq-sub-card">
                                                            <div
                                                                className="media align-items-center cust-card py-3 border-bottom">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="../assets/images/user/01.jpg" alt="01" />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Faheem</h6>
                                                                        <small className="text-dark"><b>12 : 47 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="iq-sub-card">
                                                            <div
                                                                className="media align-items-center cust-card py-3 border-bottom">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="../assets/images/user/02.jpg" alt="02" />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Kinza</h6>
                                                                        <small className="text-dark"><b>11 : 30 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="iq-sub-card">
                                                            <div className="media align-items-center cust-card py-3">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="../assets/images/user/03.jpg" alt="03" />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Asma</h6>
                                                                        <small className="text-dark"><b>11 : 21 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <a className="right-ic btn btn-primary btn-block position-relative p-2"
                                                        href="#" role="button">
                                                        View All
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item nav-icon dropdown">
                                        <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                            </svg>
                                            <span className="bg-primary "></span>
                                        </a>
                                        <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="card shadow-none m-0">
                                                <div className="card-body p-0 ">
                                                    <div className="cust-title p-3">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <h5 className="mb-0">Notifications</h5>
                                                            <a className="badge badge-primary badge-card" href="#">3</a>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 pt-0 pb-0 sub-card">
                                                        <a href="#" className="iq-sub-card">
                                                            <div
                                                                className="media align-items-center cust-card py-3 border-bottom">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="../assets/images/user/01.jpg" alt="01" />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Faheem</h6>
                                                                        <small className="text-dark"><b>12 : 47 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="iq-sub-card">
                                                            <div
                                                                className="media align-items-center cust-card py-3 border-bottom">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="../assets/images/user/02.jpg" alt="02" />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Kinza</h6>
                                                                        <small className="text-dark"><b>11 : 30 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="#" className="iq-sub-card">
                                                            <div className="media align-items-center cust-card py-3">
                                                                <div className="">
                                                                    <img className="avatar-50 rounded-small"
                                                                        src="../assets/images/user/03.jpg" alt="03" />
                                                                </div>
                                                                <div className="media-body ml-3">
                                                                    <div
                                                                        className="d-flex align-items-center justify-content-between">
                                                                        <h6 className="mb-0">Asma</h6>
                                                                        <small className="text-dark"><b>11 : 21 pm</b></small>
                                                                    </div>
                                                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <a className="right-ic btn btn-primary btn-block position-relative p-2"
                                                        href="#" role="button">
                                                        View All
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item nav-icon dropdown caption-content">
                                        <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton4"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src="../assets/images/user/1.png" className="img-fluid rounded" alt="user" />
                                        </a>
                                        <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div className="card shadow-none m-0">
                                                <div className="card-body p-0 text-center">
                                                    <div className="media-body profile-detail text-center">
                                                        <img src="../assets/images/page-img/profile-bg.jpg" alt="profile-bg"
                                                            className="rounded-top img-fluid mb-4" />
                                                        <img src="../assets/images/user/1.png" alt="profile-img"
                                                            className="rounded profile-img img-fluid avatar-70" />
                                                    </div>
                                                    <div className="p-3">
                                                        <h5 className="mb-1">asad@gmail.com</h5>
                                                        <p className="mb-0">Since 24 march, 2024</p>
                                                        <div className="d-flex align-items-center justify-content-center mt-3">
                                                            <a href="https://templates.iqonic.design/posdash/html/app/user-profile.html"
                                                                className="btn border mr-2">Profile</a>
                                                            <a href="auth-sign-in.html" className="btn border">Sign Out</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="modal fade" id="new-order" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="popup text-left">
                                <h4 className="mb-3">New Order</h4>
                                <div className="content create-workform bg-body">
                                    <div className="pb-3">
                                        <label className="mb-2">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter Name or Email" />
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <div className="d-flex flex-wrap align-items-ceter justify-content-center">
                                            <div className="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                            <div className="btn btn-outline-primary" data-dismiss="modal">Create</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar;