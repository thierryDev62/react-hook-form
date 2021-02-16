import React from "react";
import { useForm } from 'react-hook-form';
import './App.css';

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const onSubmit = (data) => {
        console.log(data);
    };

    const validateUsername = async (value) => {
        await sleep(1000);
        return value === 'bill';
    }

    return (
        <div className="App mx-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign up</h1>
                <div className="mt-5 mb-3">
                    <label htmlFor="firstName" className="form-label">
                        First Name:
                    </label>
                    <input type="text" name="firstName" className="form-control" ref={register({required: true, minLength: 2})} />
                    {errors.firstName && errors.firstName.type === "required" && (<div className="alert alert-danger" role="alert">
                            This is required!
                        </div>
                    )}
                    {errors.firstName && errors.firstName.type === "minLength" && (<div className="alert alert-danger" role="alert">
                            This field required min 2 characters!
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last Name:
                    </label>
                    <input type="text" name="lastName" className="form-control" ref={register({required: true})} />
                    {errors.lastName && (<div className="alert alert-danger" role="alert">
                            This is required!
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">
                        Gender:
                    </label>
                    <select name="gender" className="form-select" ref={register({required: true})} >
                        <option value="">Select...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors.gender && (<div className="alert alert-danger" role="alert">
                            This is required!
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input type="text" name="username" className="form-control" ref={register({required: true, validate: validateUsername})} />
                    {errors.username && (<div className="alert alert-danger" role="alert">
                            This is required!
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input type="text" name="email" className="form-control" ref={register({required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} />
                    {errors.email && errors.email.type === "required" && (<div className="alert alert-danger" role="alert">
                            This is required!
                        </div>
                    )}
                    {errors.email && errors.email.type === "pattern" && (<div className="alert alert-danger" role="alert">
                            Your email address is not valid!
                        </div>
                    )}
                </div>

                <div className="mb-3">
                    <div className="form-floating">
            <textarea
                className="form-control"
                name="aboutUs"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{height: "100px"}}
                ref={register({required: true})}
            />
                        <label htmlFor="floatingTextarea2">About you</label>
                    </div>
                    {errors.aboutUs && (<div className="alert alert-danger" role="alert">
                            This is required!
                        </div>
                    )}
                </div>

                <input type="submit" className="btn btn-success" value="SUBMIT" />
            </form>
        </div>
    );
}

