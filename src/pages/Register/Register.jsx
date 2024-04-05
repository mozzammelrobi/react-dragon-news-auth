import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)


    
    const handleRegister = (e) => {
        e.preventDefault();
        // const name = e.target.name.value ;
        // const email = e.target.email.value ;
        // const password = e.target.password.value;

        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photoURL')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,  email, password)


        createUser(email, password)
        .then(result => {
            console.log(result.user) 
        })
        .catch(error => {
            console.log(error)
        })


    }


    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-3xl text-center">Please Register</h3>

            <form
                onSubmit={handleRegister}
                className="card-body md:w-3/4 lg:w-1/2 mx-auto border rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>

                <p className="mt-4 ">Alredy  have an count please <Link className="text-purple-600" to='/login'>Login</Link></p>
            </form>

        </div>
    );
};

export default Register;