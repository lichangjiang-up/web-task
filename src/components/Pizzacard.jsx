import "../css/style.css";
import {useCallback, useMemo, useState} from "react";

const pizzaPrice = Object.freeze([550, 650, 750]);


export default function Pizzacard() {
    const [pizza, setPizza] = useState({
        counter: 1,
        typ: 0,
    });


    const setPizzaItem = (updates) => setPizza(p => ({...p, ...updates}));
    const incrementCounter = () => setPizzaItem({counter: Math.min(pizza.counter + 1, 99)});
    const decrementCounter = () => setPizzaItem({counter: Math.max(pizza.counter - 1, 1)});
    const onCounterChange = useCallback(e => setPizzaItem({counter: Math.min(Math.max(e.target.value, 1), 99)}), []);
    const onTypChange = useCallback(e => setPizzaItem({typ: Number.parseInt(e.target.value)}), []);
    const totalPrice = useMemo(() => pizza.counter * pizzaPrice[pizza.typ], [pizza]);


    return (<>
        <div className="pizza">
            <img src="/images/pizza.jpg" alt=""/>
            <div className="text-start px-4 py-3">
                <h2>Bigpizza</h2>
                <p className="text-secondary fs-5 mt-2">A big pineapple and durian pizza with tasty sesame and
                    tomato sauces.</p>
                <select className="form-select mt-4 w-auto border-secondary"
                        aria-label="Pizza size"
                        onChange={onTypChange} value={pizza.typ}>
                    <option value="0">Medium</option>
                    <option value="1">Large</option>
                    <option value="2">Extra Large</option>
                </select>
                <label className="fw-bold mt-3" htmlFor="pizzaCounter">OT <b className="fs-2">{totalPrice}₽</b></label>
                <div className="d-flex mb-3">
                    <div className="input-group w-auto">
                        <button onClick={decrementCounter} className="btn btn-outline-secondary fw-bold" type="button">-
                        </button>
                        <input id="pizzaCounter" value={pizza.counter} onChange={onCounterChange} type="number"
                               className="form-control border-secondary fw-bold text-center"
                               step="1" min="1" max="99"
                               aria-label="Pizza count"/>
                        <button onClick={incrementCounter} className="btn btn-outline-secondary fw-bold" type="button">+
                        </button>
                    </div>
                    <button className="btn btn-success ms-2 text-white d-block px-3"><i className="bi bi-cart4"></i>
                    </button>
                </div>
            </div>
        </div>
    </>);
}