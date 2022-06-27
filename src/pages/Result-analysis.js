import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ResultAnalysis = ()  => {
    const location = useLocation();
    const resultAnalysis = location.state.data;
    const [dietResult, setDiet] = useState([]);

    useEffect(() => {
        getProducts(resultAnalysis[0].result);
    }, []);
 
    const getProducts = async (kd_result) => {
        const response = await axios.get('http://localhost:5000/api/result/'+ kd_result,
        {
            params: {
                kd_result
            }
        });
        setDiet(response.data.data);
    }

    console.log(dietResult);
    return(
        <div className="container">
            <h1>Analisis</h1>

            <div className="row p-3 bg-success">
                <div className="col ms-auto">
                    Hasil Analisis
                </div>
            </div>

            <div className="row ps-5 pe-5">
                <div className="col">
                    <div className="row p-2">
                        <div className="col">
                            Nama
                        </div>
                        <div className="col">
                            data
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Jenis Kelamin
                        </div>
                        <div className="col">
                            data
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Umur
                        </div>
                        <div className="col">
                            data
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Berat Badan
                        </div>
                        <div className="col">
                            data
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Tinggi Badan
                        </div>
                        <div className="col">
                            data
                        </div>
                    </div>
                    
                    <div className="row p-2">
                        <div className="col">
                            BB Ideal
                        </div>
                        <div className="col">
                            data
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            BMI
                        </div>
                        <div className="col">
                            data
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Kebutuhan kalori
                        </div>
                        <div className="col">
                            data
                        </div>
                    </div>
                </div>
            </div>

            <h1>Pola Diet Yang Cocok Untuk Kamu</h1>
            <div className="row">
                {dietResult.map((diet) => (
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{diet.name}</h5>
                            <p className="card-text">{diet.description}</p>
                        </div>
                    </div>
                </div>
                )) }
            </div>
        </div>
    );
}

export default ResultAnalysis;