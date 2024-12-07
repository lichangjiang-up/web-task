import '../css/style.css'

export default function Todo({img, title, desc, alt, className}) {
    return (
        <div className={className}>
            <div className="wishes border h-100 border-3 border-danger p-3">
                <img className="wish-img" src={img} alt={alt}/>
                <h3 className="h3">{title}</h3>
                <p className="text-secondary fs-5">{desc}</p>
            </div>
        </div>
    );
}
