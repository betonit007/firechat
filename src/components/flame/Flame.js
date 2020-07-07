import React from "react";
import "./flame.css";

const generateAvatar = name => {
  if (name) {
    return name.split('')[0]
  }
}

const Flame = ({ flame: { flame, userId }, authState: { currentUser } }) => {
  if (userId.id === currentUser.id) {
    return (
      <div className="single-flame push-right">
        <span>{flame}</span>
      </div>
    );
  } else {
    return (
      <div className='non-user-flame'>
        {userId.photoURL ? (
          <img src={userId.photoURL} alt="other avatar"></img>
        ) : (
          <div className="">{userId.displayName && generateAvatar(userId.displayName)}</div>
        )}
        <div className="single-flame non-user">{flame}</div>
      </div>
    );
  }
};
export default Flame;
