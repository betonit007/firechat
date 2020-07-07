import React from "react";
import "./flame.css";

const Flame = ({ flame: { flame, userId }, authState: { currentUser } }) => {
  console.log(currentUser);
  if (userId.id === currentUser.id) {
    return (
      <div className="single-flame push-right">
        <span>{flame}</span>
      </div>
    );
  } else {
    return (
      <div className="non-user-flame">
        {userId.photoURL ? (
          <img src={userId.photoURL} alt="other avatar"></img>
        ) : (
          <div
            className="no-avatar"
            style={{
              backgroundColor: userId.randomColor && userId.randomColor,
            }}
          >
            {userId.displayName && userId.displayName.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="flame-name">
          <span className='display-name'>{userId.displayName && userId.displayName}</span>
          <div className="single-flame non-user">{flame}</div>
        </div>
      </div>
    );
  }
};
export default Flame;
