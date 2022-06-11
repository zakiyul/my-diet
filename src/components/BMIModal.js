import { useContext, useState } from 'react';
import {Modal} from 'react-bootstrap';

import { ProductContext } from '../context/ProductContext';

const BMIModal = () => {
    const [bmi, setBmi] = useState({});
    const [hasilBmi, setHasilBMI] = useState(0);

    const { handleCloseBMI, showBMI } = useContext(ProductContext);

    const bmiKalkulator = (beratBadan, tinggiBadan) => {
        const result = beratBadan / (tinggiBadan*tinggiBadan)
        return result
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setBmi({...bmi, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(bmi);
        const hasil = bmiKalkulator(bmi.beratBadan, bmi.tinggiBadan);
        setHasilBMI(hasil)
    }

    return ( 
        <>
            <Modal size='sm' show={showBMI} onHide={handleCloseBMI}>
                <Modal.Header>
                    <Modal.Title>BMI Kalkulator</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="berat-badan" className="form-label">Berat Badan (Kg) </label>
                            <input onChange={handleChange} type="number" name="beratBadan" id="berat-badan" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tinggi-badan" className="form-label">Tinggi Badan (m)</label>
                            <input onChange={handleChange} type="number" step="any" name="tinggiBadan" id="tinggi-badan" className="form-control" />
                            <small className='text-secondary'>Eg: 1.7</small>
                        </div>
                        <button type='submit' className="btn btn-primary">Hitung</button>
                    </form>
                    {hasilBmi && hasilBmi}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={ () => {
                        setHasilBMI(0);
                        handleCloseBMI()
                    }}>Close</button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default BMIModal;