import chica2 from "../../assets/iconAbout/chica2.svg";

import "../../styles/aboutUsCss/sectionMessageTwo.css";

export const SectionMessageTwo = () => {
  return (
    <section className="section-message-2">
      <div className="part-1-message">
        <img src={chica2} alt="img-chica2" className="img-2-about" />
      </div>
      <div className="part-2-message">
        <p className="text-2">
          Creemos que la felicidad es un camino que se construye en equipo,
          maximizando así la vida de los individuos y comunidades. Brindamos
          herramientas que son una ruta para la prosperidad y el bienestar.
        </p>
      </div>
    </section>
  );
};
