import '../../styles/productHomePage/titleProduct.css';

export const TitleProductHome = () => {
    const currentPath = window.location.pathname;

    return (
        <div className="content-product-title">
            {currentPath === "/productHomePage"  ? (
                <h1 className="title-product-home">Product Home Page</h1>
            ) : (
                <h1 className="title-product-home">Category Home Page</h1>
            )}
            <hr className="s"/>
        </div>
    );
}