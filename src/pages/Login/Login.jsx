import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signInWithPassword} = useContext(AuthContext)
    const navigate  = useNavigate()

    const location = useLocation()

    console.log('location in the login page', location)

    const handleLoggin = (e) => {
        e.preventDefault();
        const email = e.target.email.value ;
        const password = e.target.password.value;
        // console.log(email, password)

        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))

    

        signInWithPassword(email, password)
        .then(result => {
            console.log(result.user)

            // navigate after login
            navigate(location?.state ? location.state :'/')
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-3xl text-center">Please Login</h3>

            <form
            onSubmit={handleLoggin}
            className="card-body md:w-3/4 lg:w-1/2 mx-auto border rounded-lg">
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
                    <button className="btn btn-primary">Login</button>
                </div>

                <p className="mt-4 ">Dont have an count please <Link className="text-purple-600" to='/register'>Register</Link></p>
            </form>
         
        </div>
    );
};

export default Login; 