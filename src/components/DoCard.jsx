import "../css/style.css";

export default function DoCard({img, title, desc, link, className, bg}) {
    const gIcon = {background: 'linear-gradient(to right bottom, var(--bs-primary), rgba(135, 173, 228, 0.79))'};
    if (typeof bg === 'string') {
        gIcon.background = bg;
    } else if (bg?.length === 2) {
        gIcon.background = `linear-gradient(to right bottom, ${bg[0]}, ${bg[1]})`;
    }
    return (
        <div className={className}>
            <div className="border border-seccendry p-3 p-xl-4 text-center">
                <div className="gradation-icon" style={gIcon}>
                    <img src={img} alt={title}/>
                </div>
                <h4 className="my-2 do-title">{title}</h4>
                <p className="text-secondary fs-6">{desc}</p>
                <a className="do-link" href={link ?? '#'} title={title}>Learn More</a>
            </div>
        </div>
    );
}
