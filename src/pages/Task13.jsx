import Todo from "../components/Todo";
import BannerBg from "../components/BannerBg";

const todoList = [
    {
        img: '/images/f3.png',
        title: 'First block',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
        alt: 'time',
    }, {
        img: '/images/f4.png',
        title: 'Second block',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit?',
        alt: 'beach',
    }, {
        img: '/images/f5.png',
        title: 'Third block',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit! ',
        alt: 'launch',
    }
];


export default function Task13() {
    const listItems = todoList.map((item, idx) => <Todo key={idx} className="col-lg-4 p-3 text-center" {...item}/>);
    return (
        <>
            <BannerBg/>
            <div className="d-flex test-h align-items-center">
                <div className="container">
                    <div className="row">
                        {listItems}
                    </div>
                </div>
            </div>
        </>
    );
}