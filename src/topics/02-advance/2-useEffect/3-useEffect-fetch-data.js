import React, { useState, useEffect } from "react";

// useEffect preserves value n re-renders

// 1. set url
const url = "https://api.github.com/users";

// second argument
const UseEffecteFetch = () => {
  const [users, setUsers] = useState([]);

  // 2. aside func for async await
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); // this will cause infinty loop when u call it and it will crash browsers
    // console.log(users);
  };

  // 3. invoke async func inside useEffect
  useEffect(() => {
    getUsers(); //solution is to pass-in dependencies array
  }, []);

  //NB: dont use async await outside useEffect callback func either inside or a seperat
  return (
    <>
      <h2>github users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id} className="user">
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffecteFetch;
