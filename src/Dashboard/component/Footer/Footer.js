
const Footer = () => {
  return (
    <div className="footer ">
          <div className="container-fluid">
            
            <div className="d-flex p-3 justify-content-between align-items-center align-items-center">
              
              <div className="">
                <div className="text-dark bolder">
                  ©
                  <script>
                    document.write(new Date().getFullYear());
                  </script>
                  , made by
                  <a href="" className="font-weight-bold "> Yakut Ahmedin </a>
                  for NuCamp React portfolio project.
                </div>
              </div> 

               <div className="">
                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    <a href="#" className="nav-link text-muted">Creative
                      Projects</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-muted">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link text-muted">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link pe-0 text-muted">License</a>
                  </li>
                </ul>
              </div>

            </div>
            
          </div>
        </div>
  )
}

export default Footer;