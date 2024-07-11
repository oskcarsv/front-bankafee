import "../../styles/homePageCss/messageHome.css";
import { useUser } from "../../shared/hooks";
import { useEffect } from "react";

export const MessageHome = () => {
  const { getOwnUser, user, loading } = useUser();

  useEffect(() => {
    getOwnUser();
  }, []);

  console.log(user);

  return (
    <div className="message-home">
      <h1 className="message-title-home">¡Welcome to BankAfee!</h1>
      <hr className="s" />
      <p className="message-text-home">Hi {user.username}</p>
    </div>
  );
};
