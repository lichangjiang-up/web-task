import BannerBg from "../components/BannerBg";
import DoCard from "../components/DoCard";
import Counter from "../components/Counter";

const weDoList = [
    {
        img: '/images/cart.svg',
        title: 'Marketing & SEO Agency',
        desc: 'Esteem spirit temper too sav adieus wno cirect esteem.',
        bg: ['var(--bs-danger)', 'var(--bs-warning)'],
    }, {
        img: '/images/heart.svg',
        title: 'Startup Agency',
        desc: 'Esteem spirit temper too sav adieus wno cirect esteem.',
        bg: ['var(--bs-info)', 'var(--bs-success)'],
    },
    {
        img: '/images/group.svg',
        title: 'Finance Solution',
        desc: 'Esteem spirit temper too sav adieus wno cirect esteem.',
        bg: ['var(--bs-primary)', 'var(--bs-info)'],
    }, {
        img: '/images/respect.svg',
        title: 'Corporate Business',
        desc: 'Esteem spirit temper too sav adieus wno cirect esteem.',
        bg: ['var(--bs-warning)', 'var(--bs-success)'],
    },
    {
        img: '/images/group.svg',
        title: 'Travel Agency',
        desc: 'Esteem spirit temper too sav adieus wno cirect esteem.',
        bg: ['var(--bs-info)', 'var(--bs-primary)'],
    }, {
        img: '/images/respect.svg',
        title: 'Food & Restaurant',
        desc: 'Esteem spirit temper too sav adieus wno cirect esteem.',
        bg: ['var(--bs-warning)', 'var(--bs-danger)'],
    },
];

const counterList = [
    {
        icon: '/images/group.svg',
        title: 'Team Members',
        counter: '200 +',
    },
    {
        icon: '/images/cart.svg',
        title: 'Business Success',
        counter: '97%',
    },
    {
        icon: '/images/heart.svg',
        title: 'Happy Client',
        counter: '5628',
    },
    {
        icon: '/images/respect.svg',
        title: 'Business Done',
        counter: '5637',
    },
];

export default function Home() {
    const weDoItems = weDoList.map((item, index) => <DoCard className="col-lg-4 mb-0 p-2 p-xl-3"
                                                            key={index} {...item} />);
    const counterItems = counterList.map((item, index) => <Counter className="col-lg-3 col-md-6"
                                                                   key={index} {...item} />);
    return (
        <>
            <BannerBg>
                <div className="container py-5">
                    <div className="row my-5">
                        <div className="col-lg-2 d-none d-lg-flex align-items-center justify-content-center">
                            <button className="btn btn-lg fs-1 text-secondary"><i
                                className="bi bi-arrow-left-circle"></i></button>
                        </div>
                        <div className="col-lg-6 p-3 py-lg-5">
                            <h1 className="banner-title text-white">Big Opportunity For Your Business</h1>
                            <button className="btn btn-lg gradation-btn my-3" type="submit">About Us
                            </button>
                        </div>

                        <div className="col-lg-2"></div>
                        <div className="col-lg-2 d-none d-lg-flex align-items-center justify-content-center">
                            <button className="btn btn-lg fs-1 text-secondary"><i
                                className="bi bi-arrow-right-circle"></i></button>
                        </div>
                    </div>
                </div>
            </BannerBg>
            <section className="py-5">
                <div className="container">
                    <h1 className="text-center my-5">What we Do?</h1>
                    <div className="row">
                        {weDoItems}
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-lg-2 p-3">
                            <img className="rounded-3 w-100 object-fit-cover" src="/images/about.png" alt="about"/>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center p-3">
                            <h1 className="fw-normal">Why our Consulting?</h1>
                            <p className="text-secondary fs-7">Esteem spirit temper too say adieus who direct esteem. It
                                esteems luckily or picture placing drawing. Apartments frequently or motionless
                                on reasonaoie.</p>
                            <div>
                                <button className="btn btn-lg gradation-btn mb-2 mb-md-0" type="submit">About Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-counter mask">
                <div className="container py-5 position-relative">
                    <div className="row">{counterItems}</div>
                </div>
            </section>
        </>
    );
}