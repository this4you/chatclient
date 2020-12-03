import React from 'react';
import './Avatar.scss';
import generateAvatarFromHash from "../../utils/generateAvatarFromHash";
const Avatar = ({user}) => {
    if (user.avatar) {
        return (
            <img className='avatar' src={user.avatar} alt="Test"/>
        );
    } else {
        const {color, colorLighten} = generateAvatarFromHash(user._id);
        const firstNameChar = user.fullName[0].toUpperCase();
        return <div className="avatar avatar--symbol"
                    style={{background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%`}}>
            {firstNameChar}</div>
    }
};
export default Avatar;