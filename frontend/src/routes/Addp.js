import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutImg from "../assets/Chosen2.jpg";
import { useState } from "react";

function Addp() {
    const { register, handleSubmit, errors } = useForm();
    const [userInfo, setUserInfo] = useState();
    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
    }
    console.log(errors);
    return (
        <>
            <Navbar/>
            <Hero
                cName="hero-contact"
                heroImg={AboutImg}
                title="Add New Partners"
                text="Use the information in the database to register new partners for access to Partner Dashboard"
                btnClass="hide"
            />
            <div className="form-container">
                <pre>{ JSON.stringify(userInfo, undefined, 2) }</pre>
                <form onSubmit={ handleSubmit(onSubmit)}>
                    <label>Partner Name</label>
                    <input name="partner" placeholder="Company Name" {...register('text', { required: "Company Name is Required" })}/>
                    <p>{errors?.partner?.message}</p>
                    <label>Email</label>
                    <input name="email" placeholder="Email" {...register('email', { required: "Email is Required", patten:{value:/^\S+$/i,message:"This is not a valid email"} })}/>
                    <p>{errors?.email?.message}</p>
                    <label>Password</label>
                    <input name="password" placeholder="Enter Your Password" {...register('password', { required: "Password is Required", minLength:{value:4, message:"Password must be more than 4 characters"}, maxLength:{value:4, message:"Password cannot exceed more than 10 characters"} })}/>
                    <p>{errors?.password?.message}</p>
                    <button>Register</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Addp;