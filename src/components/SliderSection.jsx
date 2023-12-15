const productsData = [
  {
    image:
      "https://pavise.com/cdn/shop/files/DAD-ProductImageReplace.png?v=1700512214&width=600",
    name: "DYNAMIC AGE DEFENSE",
    price: "12,600",
  },
  {
    image:
      "https://pavise.com/cdn/shop/files/DAD-ProductImageReplace.png?v=1700512214&width=600",
    name: "DYNAMIC AGE DEFENSE",
    price: "12,600",
  },
  {
    image:
      "https://pavise.com/cdn/shop/files/DAD-ProductImageReplace.png?v=1700512214&width=600",
    name: "DYNAMIC AGE DEFENSE",
    price: "12,600",
  },
  {
    image:
      "https://pavise.com/cdn/shop/files/DAD-ProductImageReplace.png?v=1700512214&width=600",
    name: "DYNAMIC AGE DEFENSE",
    price: "12,600",
  },
];

const SliderSection = () => {
  return (
    <>
      {productsData.map((product) => (
        <div className="Slider_Banner" key={product.name}>
          <a
            href="/products/dynamic-age-defense-spf"
            className="Product_card_anchor"
          >
            <div className="Image_div">
              <img src={product.image} alt={product.name} className="image" />

              <div className="div_shop_button">
                <button className="shop_button">Shop Now</button>
              </div>
            </div>
          </a>
          <div className="product_description">
            <a href="/products/dynamic-age-defense-spf">
              <h3>{product.name}</h3>
              <div className="Price_div">
                <p>Rs. {product.price}</p>
              </div>
            </a>
            <p>
              All you need to protect against and repair signs of photoaging
            </p>
          </div>
          <ul></ul>
        </div>
      ))}
    </>
  );
};

export default SliderSection;
