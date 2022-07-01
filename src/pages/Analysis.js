import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import NavbarComp from '../components/NavbarComp';
import FooterComp from '../components/Footer';

const Analysis =() => {
    const navigate = useNavigate();
    const [formValue, setValue] = useState({
        'Q1' : 'no',
        'Q2' : 'no',
        'Q3' : 'no',
        'Q4' : 'no',
        'Q5' : 'no',
        'Q6' : 'no',
        'Q7' : 'no',
        'Q8' : 'no',
        'Q9' : 'no',
        'Q10' : 'no',
    });

    const [formInput, setInput] = useState({
        'username' : '',
        'gender' : '',
        'bodyWeight' : '',
        'bodyHeight' : '',
    })

    const saveAction = (e) => {
        e.preventDefault();
        const rule = [];

        Object.keys(formValue).forEach(key => {
            if(formValue[key] === 'yes'){
                rule.push(key);
            }
        });
        
        const rule_request = rule.join('AND');
        console.log(rule_request);

        

        axios.get('http://localhost:5000/api/analysis/'+ rule_request,
        {
            params: {
                rule_request
            }
        }).then(response => {
            let resAnalysis = response.data.data;
            resAnalysis.push(formInput);
            navigate('/hasil-analisis',{state : resAnalysis});
        }).catch(err => {
            console.log(err)
        });
        
        
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({...formInput, [name]:value});
    }

    const handleRadio = (e) => {
        const name = e.target.name;
        const id = e.target.id;

        console.log(id);
        if(id === 'male-gender'){
            setInput({...formInput, [name] : 'Laki-laki'});
        }else if(id === 'female-gender'){
            setInput({...formInput, [name] : 'Perempuan'})
        }
    }

    const handleCheck = (e) =>{
        //console.log(e.target.name);
        const name = e.target.name;
        const check = e.target.checked;
        if(check){
            setValue({...formValue, [name]:'yes'});
        }else{
            setValue({...formValue, [name]:'no'});
        }
    }

    return(
        <>
        <NavbarComp/>
        <div className="container-sm mt-5">
            <h1 className="mb-5">Analisis Diri</h1>
            <form onSubmit={saveAction}>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="user-name"
                        name="username"
                        placeholder="Nama"
                        onChange={handleInput}
                    />
                </div>
                
                <div className="form-check mb-3">
                    <Form.Check
                        type="radio" 
                        name="gender" 
                        id="male-gender" 
                        label = "Laki-laki"
                        onChange={handleRadio}
                    />
                </div>
        
                <div className="form-check mb-3">
                    <Form.Check 
                        type="radio" 
                        name="gender" 
                        id="female-gender" 
                        label="Perempuan"
                        onChange={handleRadio}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        id="user-age"
                        name="age"
                        placeholder="Umur"
                        onChange={handleInput}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="number" 
                        className="form-control" 
                        id="user-weight"
                        name="bodyWeight"
                        placeholder="Berat Badan"
                        onChange={handleInput}
                    />
                </div>
        
                <div className="mb-5">
                    <input 
                        type="number" 
                        className="form-control" 
                        id="user-height" 
                        name="bodyHeight"
                        placeholder="Tinggi Badan"
                        onChange={handleInput}
                    />
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check 
                            type="checkbox" 
                            label="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki? "
                            name="Q1"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div >
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering melakukan aktifitas mencuci ?" 
                            name="Q2"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering melakukan aktifitas membersihkan rumah ?"
                            name="Q3"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering traveling ?"
                            name="Q4"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering berbelanja ?"
                            name="Q5"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering menggunakan atau mengendarai kendaraan ?"
                            name="Q6"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering melakukan aktivitas dalam ruangan ?"
                            name="Q7"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering melakukan aktifitas mengetik ?"
                            name="Q8"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering menggunakan komputer ?"
                            name="Q9"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div>
                        <Form.Check
                            type="checkbox" 
                            label="Apakah anda sering melakukan aktifitas mengajar ?"
                            name="Q10"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                </div>

                <div className="d-grid gap-2 mt-5">
                    <button className="btn btn-success" type="submit">Diagnosa</button>
                </div>
            </form>
        </div>
        <div className="mb-5"></div>
        <FooterComp/>
        </>
    );
}

export default Analysis;