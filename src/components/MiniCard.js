import React from 'react'

const MiniCard = ({ user, toggleFollow }) => {
  return (
    <div className="section minicard">
      <div className="section">
        <img loading="lazy" className="user-profile"  src={user.avatar} width={'100%'} />
        <div>
          <h3 className="bold">{user.username}</h3>
          <p>{user.name}</p>
      </div>
    </div>
      {user.button_visible && <div id="follow-mini" className={user.is_followed? "followed-button" : "follow-button"}
        onClick={() => toggleFollow(user)}
      >
      {user.is_followed? "Unfollow": "Follow"}
      </div>}
    </div>
  )
}

export default MiniCard
