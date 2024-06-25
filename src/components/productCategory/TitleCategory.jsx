export const TitleCategory = () => {
    return (
        <div className="section-product-title">
            <div className='content-titles'>
                <h1 className="title-product-category">Category Product</h1>
                <div>
                    <Link to="/productHomePage" className='link-back'>
                        <p className='text-back'>back</p>
                    </Link>
                </div>
            </div>
            <hr className='s' />
        </div>
    );
};