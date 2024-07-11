import myAccount from "../../assets/iconHomePage/myAccount.svg";
import editMyAccount from "../../assets/iconHomePage/editMyAccount.svg";
import "../../styles/homePageCss/cardAccount.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  return (
    <>
      <section className="card-account">
        <Slider {...settings} className="slider-container">
          <div className="card-account-info">
            <div className="content-title">
              <p className="card-account-info-title">
                Cuenta ahorro - Mi cuenta
              </p>
              <img src={myAccount} alt="icon" className="icon-myAccount" />
            </div>
            <div className="content-title">
              <p className="card-account-info-number">1234567890 </p>
              <img src={editMyAccount} alt="icon" className="icon-myAccount" />
            </div>
            <h1 className="card-account-info-amount">GTQ 400.00</h1>
          </div>
          <div className="card-account-info">
            <div className="content-title">
              <p className="card-account-info-title">
                Cuenta ahorro - Mi cuenta
              </p>
              <img src={myAccount} alt="icon" className="icon-myAccount" />
            </div>
            <div className="content-title">
              <p className="card-account-info-number">1234567890 </p>
              <img src={editMyAccount} alt="icon" className="icon-myAccount" />
            </div>
            <h1 className="card-account-info-amount">GTQ 500.00</h1>
          </div>
          <div className="card-account-info">
            <div className="content-title">
              <p className="card-account-info-title">
                Cuenta ahorro - Mi cuenta
              </p>
              <img src={myAccount} alt="icon" className="icon-myAccount" />
            </div>
            <div className="content-title">
              <p className="card-account-info-number">1234567890 </p>
              <img src={editMyAccount} alt="icon" className="icon-myAccount" />
            </div>
            <h1 className="card-account-info-amount">GTQ 500.00</h1>
          </div>
          <div className="card-account-info">
            <div className="content-title">
              <p className="card-account-info-title">
                Cuenta ahorro - Mi cuenta
              </p>
              <img src={myAccount} alt="icon" className="icon-myAccount" />
            </div>
            <div className="content-title">
              <p className="card-account-info-number">1234567890 </p>
              <img src={editMyAccount} alt="icon" className="icon-myAccount" />
            </div>
            <h1 className="card-account-info-amount">GTQ 500.00</h1>
          </div>
        </Slider>
      </section>
    </>
  );
};
