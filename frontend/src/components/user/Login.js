import {Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, login } from '../../actions/userActions';
import MetaData from '../layouts/MetaData';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './login.css';
 export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
 
    const { loading, error, isAuthenticated } = useSelector(state => state.authState)
    const redirect = location.search?'/'+location.search.split('=')[1]:'/';

    const  submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    useEffect(() => {
        if(isAuthenticated) {
            navigate(redirect)
        }

        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[error, isAuthenticated, dispatch, navigate])

    return (
        <Fragment>
            <MetaData title={`Login`} />
            <section>
                <div className='section1'>
            <div className="leaves">
			<div className="set">
				<div><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208979/pvcpro/login_asserts/wcowouwa7x7b6jdyoqbf.png"/></div>
				<div><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208979/pvcpro/login_asserts/p1rdfnaqc064kpyizssh.png"/></div>
				<div><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208979/pvcpro/login_asserts/dt5dgbbzw1p2vuno04t6.png"/></div>
				<div><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208979/pvcpro/login_asserts/teic1osjlc1gf0eay3p0.png"/></div>
				<div><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208979/pvcpro/login_asserts/wcowouwa7x7b6jdyoqbf.png"/></div>
				<div><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208979/pvcpro/login_asserts/p1rdfnaqc064kpyizssh.png"/></div>
				<div><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208979/pvcpro/login_asserts/dt5dgbbzw1p2vuno04t6.png"/></div>
				<div><img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208979/pvcpro/login_asserts/teic1osjlc1gf0eay3p0.png"/></div>
			</div>
		</div>
		<img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208980/pvcpro/login_asserts/ptx6snkcemlfeuvjzc5h.jpg" className="bg"/>
		<img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208980/pvcpro/login_asserts/e4t2hxdcfwua6u7p1wtl.png" className="girl"/>
		<img src="https://res.cloudinary.com/duhcntqom/image/upload/v1707208981/pvcpro/login_asserts/ogvfmma8rroyzum5yx2i.png" className="trees"/>
		<form onSubmit={submitHandler} className="login">
			<h2>Sign In</h2>
			<div className="inputBox">
				<input type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e =>setEmail(e.target.value)}/>
			</div>
			<div className="inputBox">
				<input type="password" placeholder="Password"
                value={password}
                onChange={e =>setPassword(e.target.value)}/>
			</div>
			<div className="inputBox">
				<input type="submit" value="Login" id="btn"
                disabled={loading}/>
			</div>
			<div className="group">
            <Link to="/password/forgot">Forgot Password?</Link>
                <Link to="/register">Signup</Link>
			</div></form>
            </div>
		</section>
        </Fragment>
    )
}