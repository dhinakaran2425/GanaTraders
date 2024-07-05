import {useEffect, useState} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { register, clearAuthError } from '../../actions/userActions'
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import './register.css';
export default function Register() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState)

    const onChange = (e) => {
        if(e.target.name === 'avatar') {
           const reader = new FileReader();
           reader.onload = () => {
                if(reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(e.target.files[0])
                }
           }


           reader.readAsDataURL(e.target.files[0])
        }else{
            setUserData({...userData, [e.target.name]:e.target.value })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userData.name)
        formData.append('email', userData.email)
        formData.append('password', userData.password)
        formData.append('avatar', avatar);
        dispatch(register(formData))
    }

    useEffect(()=>{
        if(isAuthenticated) {
            navigate('/');
            return
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
		<form onSubmit={submitHandler} className="login" encType='multipart/form-data'>
			<h2>Sign Up</h2>
			<div className="inputBox">
				<input type="name" htmlFor="email_field"
                            placeholder="Name"
                            name='name' onChange={onChange}/>
			</div>
        <div className="inputBox">
				<input type="email" htmlFor="email_field" name='email' onChange={onChange}
                            placeholder="Email"/>
			</div>
			<div className="inputBox">
				<input type="password" name='password' onChange={onChange}placeholder="Password" htmlFor="password_field"
                />
			</div>
        
			<div className="inputBox">
				<input type="submit" value="Register" id="btn"
                disabled={loading}/>
			</div>
			<div className="group">
                <Link to="/login">Login</Link>
		 	</div></form>
             </div>
		 </section>
        // <div className="row wrapper">
        //     <div className="col-10 col-lg-5">
        //     <form onSubmit={submitHandler} className="shadow-lg" encType='multipart/form-data'>
        //         <h1 className="mb-3">Register</h1>

        //     <div className="form-group">
        //         <label htmlFor="email_field">Name</label>
        //         <input name='name' onChange={onChange} type="name" id="name_field" className="form-control" />
        //     </div>

        //         <div className="form-group">
        //         <label htmlFor="email_field">Email</label>
        //         <input
        //             type="email"
        //             id="email_field"
        //             name='email' 
        //             onChange={onChange}
        //             className="form-control"
                  
        //         />
        //         </div>
    
        //         <div className="form-group">
        //         <label htmlFor="password_field">Password</label>
        //         <input
        //             name='password' 
        //             onChange={onChange}
        //             type="password"
        //             id="password_field"
        //             className="form-control"
                  
        //         />
        //         </div>

        //         <div className='form-group'>
        //         <label htmlFor='avatar_upload'>Avatar</label>
        //         <div className='d-flex align-items-center'>
        //             <div>
        //                 <figure className='avatar mr-3 item-rtl'>
        //                     <img
        //                         src={avatarPreview}
        //                         className='rounded-circle'
        //                         alt='Avatar'
        //                     />
        //                 </figure>
        //             </div>
        //             <div className='custom-file'>
        //                 <input
        //                     type='file'
        //                     name='avatar'
        //                     onChange={onChange}
        //                     className='custom-file-input'
        //                     id='customFile'
        //                 />
        //                 <label className='custom-file-label' htmlFor='customFile'>
        //                     Choose Avatar
        //                 </label>
        //             </div>
        //         </div>
        //     </div>
    
        //         <button
        //         id="register_button"
        //         type="submit"
        //         className="btn btn-block py-3"
        //         disabled={loading}
        //         >
        //         REGISTER
        //         </button>
        //     </form>
        //     </div>
        // </div>
    )
}