import {useSelector } from 'react-redux';
import './button.css';

export default function Profile () {
    const { user }  = useSelector(state => state.authState);

    return (
        <div className="row justify-content-around mt-5 user-info">
            
    
            <div className="col-12 col-md-5">
                <p>Full Name: {user.name}</p>
                <p>Email Address: {user.email}</p>
                <p>Joined: {String(user.createdAt).substring(0, 10)}</p>
                <div class="wrapper123">
  <div class="link_wrapper123">
    <a href="/orders" className='bestin'>Orders</a>
    <div class="icon123">
      <svg className='svg4567' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
    </svg>
    </div>
  </div>
  
</div>
<hr/>

<div class="wrapper123">
  <div class="link_wrapper123">
    <a href="/myprofile/update/password" className='bestin'>Change Password</a>
    <div class="icon123">
      <svg className='svg4567' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
    </svg>
    </div>
  </div>
  
</div>
                <hr/>
                <a href="/myprofile/update" className='alpha'><span>Edit Profile</span></a>
            </div>
        </div>
    )
}