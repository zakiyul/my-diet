import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";

import { ProductContext } from "../context/ProductContext";

const BMIModal = () => {
  const [bmi, setBmi] = useState({});
  const [hasilBmi, setHasilBMI] = useState(0);

  const { handleCloseBMI, showBMI } = useContext(ProductContext);

  const bmiKalkulator = (beratBadan, tinggiBadan) => {
    const BMI = beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100));
    if (BMI < 18.5) {
      return "Anda Kekurangan Bobot.";
    }
    if (BMI > 18.5 && BMI < 23.9) {
      return "Anda normal dan sehat.";
    }
    if (BMI > 24 && BMI < 26.9) {
      return "Anda Kelebihan Bobot.";
    }
    if (BMI > 27 && BMI < 29.9) {
      return "Anda obesitas 1.";
    }
    if (BMI > 30) {
      return "Anda obesitas 2.";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBmi({ ...bmi, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bmi);
    const hasil = bmiKalkulator(bmi.beratBadan, bmi.tinggiBadan);
    setHasilBMI(hasil);
  };

  return (
    <>
      <Modal size="lg" show={showBMI} onHide={handleCloseBMI}>
        <Modal.Header>
          <Modal.Title>BMI Kalkulator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Gunakan kalkulator ini untuk memeriksa Indeks Massa Tubuh (IMT) dan mengecek apakah berat badan Anda ideal atau tidak.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="berat-badan" className="form-label">
                Berat Badan (Kg){" "}
              </label>
              <input onChange={handleChange} type="number" name="beratBadan" id="berat-badan" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="tinggi-badan" className="form-label">
                Tinggi Badan (cm)
              </label>
              <input onChange={handleChange} type="number" step="any" name="tinggiBadan" id="tinggi-badan" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Hitung
            </button>
          </form>
          <br></br>
          {hasilBmi && hasilBmi}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setHasilBMI(0);
              handleCloseBMI();
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BMIModal;
