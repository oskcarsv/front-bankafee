import "../../styles/homePageCss/messageHome.css";

import {getOwnUser as getOwnAccountRequest} from "../../services/";

import {useEffect, useState} from "react";

import {toast} from "react-hot-toast";

export const MessageHome = () => {

  const [user, setUser] = useState();

  const listUser = async () => {

    try{

      const response = await getOwnAccountRequest();

      setUser(JSON.parse(response.data).user);

    }catch(error){

      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);

      return toast.error(user.error?.response?.data || "Can't List Accounts")

    }

  }

  useEffect(() => {listUser()}, []);

  console.log(user);

  return (
    <div className="message-home">
      <h1 className="message-title-home">¡Welcome to BankAfee!</h1>
      <hr className="s" />
          {user.map((user)=>(
            <div key={user._id}>
              <p className="text-home">Hi {user.name}</p>
            </div>
          ))};
    </div>
  );
};
