import "../../css/nav.css";
export default function MainNav() {
    return (
        <header className="navbar-sticky header-static border-bottom border-s border-opacity-25  py-0">
            <nav className="navbar navbar-expand-md py-md-0">
                <div className="container py-2">
                    <a href="/" className="task-16-log d-flex align-items-center flex-nowrap text-decoration-none navbar-brand p-0">
                        <img src="/images/logo.svg" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-nav-scroll mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Services</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/page/projects" role="button"
                                   data-bs-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    Tasks
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="postMenu">
                                    <li><a className="dropdown-item" href="/task13">task 13</a></li>
                                    <li><a className="dropdown-item" href="/task14">task 14</a></li>
                                    <li><a className="dropdown-item" href="/">task 15</a></li>
                                    <li><a className="dropdown-item" href="/task16">task 16</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page/contact">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page/contact">Porfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page/contact">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page/contact">Contacts</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="nav-btn me-lg-3 bg-dark-gray" type="submit">
                                <img src="/images/measering.svg" alt="measering" className="me-4"/>
                                <span>Make request</span>
                            </button>

                            <button className="nav-btn bg-orange" type="submit">
                                <img src="/images/calculation.svg" alt="calculation" className="me-4"/>
                                <span>Calculation</span>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
}