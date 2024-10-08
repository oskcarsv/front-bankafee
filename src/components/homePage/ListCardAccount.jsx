import myAccount from "../../assets/iconHomePage/myAccount.svg";
import editMyAccount from "../../assets/iconHomePage/editMyAccount.svg";
import "../../styles/homePageCss/cardAccount.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { getOwnAccount as getOwnAccountRequest } from "../../services/";

import { useEffect, useState } from "react";

import { toast } from "react-hot-toast";

let length = 0;

const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        unslick: true,
      },
    },
  ],
};

export const ListCardAccount = () => {
  const [account, setAccount] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const listAccounts = async () => {
    setIsLoading(true);

    try {
      const response = await getOwnAccountRequest();

      setAccount(response.data.account);

      length = account;
    } catch (error) {
      console.log(response.error);
      console.log(response.e);
      console.log(response.e?.response);
      console.log(response.e?.response?.data);

      return toast.error(
        account.error?.response?.data || "Can't List Accounts",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    listAccounts();
  }, []);

  return (
    <>
      <section className="card-account">
        <Slider {...settings} className="slider-container">
          {isLoading ? (
            <p>Cargando...</p>
          ) : (
            <div className="card-account-info">
              {Array.isArray(account) && account.length > 0 ? (
                account.map((account) => (
                  <div key={account._id}>
                    <div className="content-title">
                      <p className="card-account-info-title">
                        {account.type} - {account.alias}
                      </p>
                      <img
                        src={myAccount}
                        alt="icon"
                        className="icon-myAccount"
                      />
                    </div>
                    <div className="content-title">
                      <p className="card-account-info-number">
                        {account.noAccount.slice(11)}{" "}
                      </p>
                      <img
                        src={editMyAccount}
                        alt="icon"
                        className="icon-myAccount"
                      />
                    </div>
                    <h1 className="card-account-info-amount">
                      Q.{account.amount}
                    </h1>
                  </div>
                ))
              ) : (
                <h5>NO FUNCIONA!!</h5>
              )}
            </div>
          )}
        </Slider>
      </section>
    </>
  );
};
