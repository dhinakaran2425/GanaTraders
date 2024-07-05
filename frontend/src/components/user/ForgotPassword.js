import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { forgotPassword,clearAuthError } from "../../actions/userActions";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const { error, message } = useSelector(state => state.authState);

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        dispatch(forgotPassword(formData))
    }

    useEffect(()=>{
        if(message) {
            toast(message, {
                type: 'success',
                position: toast.POSITION.BOTTOM_CENTER
            })
            setEmail("");
            return;
        }

        if(error)  {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    }, [message, error, dispatch])


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
		<form onSubmit={submitHandler} className="login">
			<h2>Forgot Password</h2>
			<div className="inputBox">
                        <input
                        placeholder="Email"
                            type="email"
                            id="email_field"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="inputBox">
				<input type="submit" value="Send Email" id="btn"
                />
			</div>
			</form>
            </div>
		</section>
    )
}