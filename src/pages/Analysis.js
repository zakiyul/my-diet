import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Analysis =() => {
    const navigate = useNavigate();
    const [formValue, setValue] = useState({
        'username' : '',
        'gender' : '',
        'bodyWeight' : '',
        'bodyHeight' : '',
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
            console.log(response.data)
            navigate('/hasil-analisis',{state : response.data});
        }).catch(err => {
            console.log(err)
        });
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue({...formValue, [name]:value});
    }

    const handleRadio = (e) => {
        const name = e.target.name;
        const id = e.target.id;

        console.log(id);
        if(id === 'male-gender'){
            setValue({...formValue, [name] : 'Laki-laki'});
        }else if(id === 'female-gender'){
            setValue({...formValue, [name] : 'Perempuan'})
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
        <div className="container">
            <h1>Analisis Diri</h1>
            <form onSubmit={saveAction}>
                <div class="mb-3">
                    <input 
                        type="text" 
                        class="form-control" 
                        id="user-name"
                        name="username"
                        placeholder="Nama"
                        onChange={handleInput}
                    />
                </div>
                
                <div class="form-check">
                    <input 
                        class="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="male-gender" 
                        onChange={handleRadio}
                    />
                    <label class="form-check-label" for="male-gender">
                    Laki-laki
                    </label>
                </div>
        
                <div class="form-check">
                    <input 
                        class="form-check-input" 
                        type="radio" 
                        name="gender" 
                        id="female-gender" 
                        onChange={handleRadio}
                    />
                    <label class="form-check-label" for="female-gender">
                    Perempuan
                    </label>
                </div>

                <div class="mb-3">
                    <input 
                        type="number" 
                        class="form-control" 
                        id="user-age"
                        name="age"
                        placeholder="Umur"
                        onChange={handleInput}
                    />
                </div>

                <div class="mb-3">
                    <input 
                        type="number" 
                        class="form-control" 
                        id="user-weight"
                        name="bodyWeight"
                        placeholder="Berat Badan"
                        onChange={handleInput}
                    />
                </div>
        
                <div class="mb-3">
                    <input 
                        type="number" 
                        class="form-control" 
                        id="user-height" 
                        name="bodyHeight"
                        placeholder="Tinggi Badan"
                        onChange={handleInput}
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q1"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q2"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q3"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q4"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q5"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q6"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q7"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q8"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q9"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="input-group mb-3">
                    <div class="input-group-text" >
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="" 
                            name="Q10"
                            id="flexCheckDefault" 
                            onChange={handleCheck}
                        />
                    </div>
                    <input 
                        type="text" 
                        class="form-control" 
                        value="Apakah anda dalam melakukan aktifitas sering dengan berjalan kaki?" 
                        aria-label="Pertanyaan Analisis" 
                        readOnly
                    />
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-success" type="submit">Diagnosa</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Analysis;