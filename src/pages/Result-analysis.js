/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import FooterComp from "../components/Footer";

const ResultAnalysis = ()  => {
    const location = useLocation();
    const resultAnalysis = location.state[0];
    const userData = location.state[1];
    const [dietResult, setDiet] = useState([]);
    const [bmi, setBmi] = useState();
    const [bbIdeal, setBbIdeal] = useState();
    const [calory, setCalory] = useState();
    
    useEffect(() => {
        getProducts(resultAnalysis.result);
        countBMI();
        countBbIdeal();
        countCaloryNeed();
    }, []);
    
    const getProducts = async (kd_result) => {
        const response = await axios.get('https://my-diet-diary.herokuapp.com/api/result/'+ kd_result,
        {
            params: {
                kd_result
            }
        });
        setDiet(response.data.data);
    }
    
    const countBMI = () => {
        const height = userData.bodyHeight/100;
        let resultBmi = userData.bodyWeight/(height * height);
        setBmi(resultBmi);
    }
    
    const countBbIdeal = () => {
        if(userData.gender === 'Laki-laki'){
            const resultBbIdeal = (userData.bodyHeight-100) - ((userData.bodyHeight-100)*0.10);
            setBbIdeal(resultBbIdeal);
        }else if(userData.gender === 'Perempuan'){
            const resultBbIdeal = (userData.bodyHeight-100) - ((userData.bodyHeight-100)*0.15);
            setBbIdeal(resultBbIdeal);
        }
    }
    
    const countCaloryNeed = () => {
        if(userData.gender === 'Laki-laki'){
            const resultBbIdeal = (88.4 + 13.4 * userData.bodyWeight) + (4,8 * userData.bodyHeight) - (5.68 * userData.age);
            setCalory(resultBbIdeal);
        }else if(userData.gender === 'Perempuan'){
            const resultBbIdeal =  (44.,6 + 9.25 * userData.bodyWeight) + (3.10 * userData.bodyHeight) - (4.33 * userData.age);
            setCalory(resultBbIdeal);
        }
    }

    
    return(
        <>
        <NavbarComp />
        <div className="container mt-5 mb-5">
            <h1 className="mb-5">Analisis</h1>

            <div className="row p-3 bg-success">
                <div className="col ms-auto text-white text-center">
                    Hasil Analisis
                </div>
            </div>

            <div className="row ps-5 pe-5 border border-success mb-5">
                <div className="col">
                <div className="row p-2">
                <div className="col">
                Nama
                </div>
                <div className="col">
                            {userData.username}
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Jenis Kelamin
                        </div>
                        <div className="col">
                            {userData.gender}
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Umur
                        </div>
                        <div className="col">
                            {userData.age} tahun
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Berat Badan
                        </div>
                        <div className="col">
                            {userData.bodyWeight} kg
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Tinggi Badan
                        </div>
                        <div className="col">
                            {userData.bodyHeight} cm
                        </div>
                    </div>
                    
                    <div className="row p-2">
                        <div className="col">
                            BB Ideal
                        </div>
                        <div className="col">
                            {bbIdeal} kg
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            BMI
                        </div>
                        <div className="col">
                            {bmi && bmi.toString().substring(0, 4)}
                        </div>
                    </div>

                    <div className="row p-2">
                        <div className="col">
                            Kebutuhan kalori
                        </div>
                        <div className="col">
                            {calory} kal
                        </div>
                    </div>
                </div>
            </div>


            <h2 className="mt-4">Pola Diet Yang Cocok Untuk Kamu</h2>
            <div className="row">
                {dietResult.map((diet) => (
                    <div className="col-sm-12">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><b>{diet.name}</b></h5>
                            <p className="card-text">{diet.description}</p>
                        </div>
                    </div>
                </div>
                )) }
            </div>
        </div>
        <FooterComp />
        </>
    );
}

export default ResultAnalysis;