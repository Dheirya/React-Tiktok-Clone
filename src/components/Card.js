import React from 'react'

const Card = ({ user, toggleFollow }) => {

  const timestamp = user.timestamp
  const timeStampReformat = timestamp.slice(2, 10).replaceAll("-", "/");
  const timeArr = timeStampReformat.split("/").reverse();
  const timemonth = timeArr[1];
  const sorted = timeArr.sort(function(x,y){ return x === timemonth ? -1 : y === timemonth ? 1 : 0; });
  const finaltime = sorted.join('/');

  return (
    <div className="card">
      <div className="break" />
        <div className="section">
          <div className="user-info">
            <img loading="lazy" className="user-profile"  src={user.avatar} width={'100%'} />
            <div>
            <div className="section">
              <h2 className="bold">{user.username}</h2>
              <p className="username" style={{marginTop: "16px"}}>@{user.name}</p>
              <p style={{marginTop: "16px", marginLeft: "-7px"}}>on {finaltime}</p>
            </div>
            <p>{user.caption}</p>
            </div>
          </div>
          {user.button_visible && <div id="followbtnpost" className={user.is_followed? "followed-button" : "follow-button"}
            onClick={() => toggleFollow(user)}>
              {user.is_followed? "Unfollow": "Follow"}
          </div>}
        </div>
        <video preload="auto" style={{textAlign: 'left'}} className="video" controls>
          <source src={user.video} type="video/mp4" />
        </video>
        <div className="socials">
          <div className="heart">
              <i className="fa fa-heart"></i>
              <br/>
              <div className="social-tag">{user.likes}</div>
              <br/>
          </div>
          <div className="comment">
              <i className="fa fa-comment"></i>
              <br/>
              <div className="social-tag">{user.comments}</div>
              <br/>
          </div>
          <div className="share">
            <i className="fa fa-share"></i>
          </div>
        </div>
    </div>
  )
}

export default Card
