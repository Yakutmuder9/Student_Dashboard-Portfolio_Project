const Header = () => {
  return (
    <header className="py-4 sticky-top">
      <div
        className=" navbar navbar-main  navbar-expand-lg sticky-top  bg-dark"
        id="navbar_top"
      >
        <div className="col sticky-top py-1 px-3 d-flex justify-content-between">
          <nav className="navbar navbar-light d-block .d-sm-none d-lg-none">
            <a className="navbar-brand" href="#"></a>
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse p-3 "
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a
                    className="nav-link text-white text-bold"
                    href="/dashboard"
                  >
                    Dashboard<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="/dashboard">
                    Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="">
                    Event
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="inbox.html">
                    Inbox
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="resource.html">
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="signin.html">
                    Sign in
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>

          <div aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-white " href="">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-sm text-white active"
                aria-current="page"
              >
                Dashboard
              </li>
            </ol>
            <h3 className="font-weight-bolder mb-0 text-secondary">
              {" "}
              Dashboard
            </h3>
          </div>

          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end mt-sm-0 mt-2 me-md-0 me-sm-4 w-auto"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group">
                <span className="input-group-text text-body">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <a
                  href=""
                  className="nav-link text-body  font-weight-bold px-2 p-1 ml-2 btn btn-outline-primary"
                >
                  <i className="fa fa-user text-white pe-1" title="Edit"></i>
                  <span className="d-sm-inline d-none text-white">
                    Log out{" "}
                  </span>
                </a>
              </li>

              <li className="nav-item px-3 d-flex align-items-center">
                <a href="" className="nav-link text-body p-0">
                  <i
                    className="fa fa-cog text-white cursor-pointer"
                    id="setting"
                  ></i>
                </a>
              </li>

              <li className="nav-item dropdown pe-2 d-flex align-items-center">
                <a
                  href=""
                  className="nav-link text-body p-0"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="notification">
                    <span className="badge badge-danger bg-danger  position-absolute">
                      3
                    </span>
                    <i
                      className="fa fa-bell text-white cursor-pointer"
                      id="setting"
                    ></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
