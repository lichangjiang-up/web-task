import "../css/style.css";

export default function Counter({icon, title, counter, className}) {
    return (
        <div className={className}>
            <div className="text-white d-flex flex-colum d-flex flex-column justify-content-center p-3 p-xl-4 align-items-center">
                <img className="counter-img" src={icon} alt={title}/>
                <span className="fs-2 my-2 text-white">{counter}</span>
                <small className="text-white">{title}</small>
            </div>
        </div>
    );
}