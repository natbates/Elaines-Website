import "../styles/brands.css";

const Brand = (img, brandname, owner, description) =>
{

    console.log(img);

    return (
        <>
            <div className="top-quote-img"></div>
            <img
                src={img.img}
                className="carousel-image"
            />
            <h1 className="brand-name">Brand Name</h1>
            <div className="star-rating">
                <img src = "/images/processed/star.png"></img>
                <img src = "/images/processed/star.png"></img>
                <img src = "/images/processed/star.png"></img>
                <img src = "/images/processed/star.png"></img>
                <img src = "/images/processed/star.png"></img>
            </div>
            <p className="brand-review">Blah blah blah blahre wqoid jqwopdj qwdj qpow djpoqiwj dqwjpi d</p>
        </>
    )
}

export default Brand;