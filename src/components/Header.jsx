import '../styles/landingPagesCss/header.css';

export const Header = () => {
    const currentPath = window.location.pathname;

    return(
        <header className="header-container">
            <div className="header-content">
                <h1 className="header-title">
                    {currentPath === "/service" ? (
                        "¡Echa un vistazo a nuestros servicios para que puedas aprovecharlos al máximo!"
                    ) : (
                        "Construir un futuro financiero más próspero para todos"
                    )}
                </h1>
            </div>
            <section className='header-style-border'>
                <div className='part-1'></div>
                <div className='part-2'></div>
            </section>
        </header>
    );
};