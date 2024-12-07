import "../css/style.css";

export default function Navbar() {
    return (
        <header className="navbar-sticky header-static border-bottom border-white border-opacity-25 py-0">
            <nav className="navbar navbar-expand-md py-md-0">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav navbar-nav-scroll mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home(Task15)</a>
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
                                <a className="nav-link" href="/page/contact">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page/contact">Case Study</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/page/projects" role="button"
                                   data-bs-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    Blog
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="postMenu">
                                    <li><a className="dropdown-item" href="/task13">task 13</a></li>
                                    <li><a className="dropdown-item" href="/task14">task 14</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page/contact">Contact</a>
                            </li>
                        </ul>
                        <button className="btn btn-lg gradation-btn mb-2 mb-md-0" type="submit">Get a Quote</button>

                    </div>
                </div>
            </nav>
        </header>
    )
}