import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App(props) {
  const [user, setUser] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {user.map((user) => (
        <div className="container">
          <div key={user.id} className="upper-container">
            <div className="image-container">
              <img
                alt="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRROt7YUKa7excpJt4CR59ZwHzhWDfV1mr0eQ&usqp=CAU"
              />
            </div>
          </div>

          <div className="lower-container">
            <div>
              <span>{user.id}</span>
              <h3>{user.name}</h3>
              <h4>{user.username}</h4>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <button> View profile</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
