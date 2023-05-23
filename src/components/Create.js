import axios from 'axios';
import React, { useState } from 'react'

function Create() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

 
 const  handleSubmit=(e) => {
    e.preventDefault();
    axios.post("https://646c951c7b42c06c3b2b91d7.mockapi.io/crud",{
        e_name: name,
        e_age: age,
        e_email: email
    })
}

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter Name: </label>
                            <input type='text' placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age: </label>
                            <input type='number' placeholder='Age' onChange={(e) => setAge(e.target.value)} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email: </label>
                            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Submit' className='btn btn-primary' />
                        </div>
                    </form>

                    {name}
                    <br />
                    {age}
                    <br />
                    {email}
                </div>
            </div>
        </>
    )
}

export default Create;