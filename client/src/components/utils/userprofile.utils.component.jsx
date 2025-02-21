import React from 'react';
import "../../styles/utils/utils.styles.css";
import "../../styles/utils/userprofile.utils.styles.css";
import UserIcon from "../icons/userIcon.icon.component";
import LogoutIcon from "../icons/logout.icons.component";
import API from "../../axios.config.js";
import { useAuthContext } from '../../AuthContext';

function UserProfile({username,email}) {
  const{setAuthentication , setUsername} = useAuthContext();

  const handleLogout = async()=>{
    await API.post('/auth/logout')
    .then((response)=>{
      setAuthentication(response.data.isAuth);
      setUsername('');
    })
    .catch(err=>{
      alert(err);
    })
  }

  return (
    <div className='UserProfileDom' >
        <div className="UserProfileHeaderDom">
            <span className='text-16-semibold' >{username}</span>
            <UserIcon width={24} classname={'UserProfileIcon'}/>
        </div>
        <div className="UserProfileBodyDom">
            <div className="UserProfileLogout" onClick={handleLogout}>
                <span className='text-14-semibold' >Logout account</span>
                <LogoutIcon width={18} classname={"UserProfileLogoutIcon"} />
            </div>
        </div>
    </div>
  )
}

export default UserProfile