import React, { useState } from "react";
import ViewShowCalculo from "./ViewShowCalculo";

const ViewCalcular = () => {
    const [oddNumbers, setOddNumbers] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            alert('Por favor, ingresa un número.');
        }   

        const number = parseInt(inputValue, 10);
        if (number < 0) {
            alert('Sólo números enteros positivos.');
            return;
        }
        const oddNumbers = [];
        for (let i = 1; i <= number; i += 2) {
            oddNumbers.push(i);
        }
        setOddNumbers(oddNumbers);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <div className='container p-2'>
                <div className='row'>
                    <div className='col-md-4 mx-auto'>
                        <div className="card card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input
                                        type="number"
                                        name="number"
                                        value={inputValue}
                                        onChange={handleChange}
                                        className="form-control"
                                        placeholder="Por favor, ingresa un número"
                                    />
                                </div>
                                <div className="form-group">
                                    <br />
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-md btn-success">Consultar</button>
                                    </div>
                                </div>
                            </form>
                            <br />
                            {
                                oddNumbers.length > 0 ? (
                                    <ViewShowCalculo oddNumbers={oddNumbers} />
                                ) : ("")
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ViewCalcular;
