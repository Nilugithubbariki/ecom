import React from "react";
import "./AboutPage.css";
const AboutPage = () => {
  return (
    <div>
      <h3>
        At Shopping Cart, I bring you a seamless and convenient online shopping
        experience tailored just for you. Our platform combines the latest in
        technology with a user-friendly interface, making it easier than ever to
        find and purchase your favorite products. Explore a wide range of
        categories, from electronics to fashion, all from the comfort of your
        home.
      </h3>
      <div className="Grid">
        <div className="cartStyle">
          <h1 className="textStyle">Search</h1>
          <hr />
          <h5>
            Our intuitive search box is your gateway to a world of products.
            Whether you're looking for the latest gadgets, trendy apparel, or
            must-have accessories, our search feature ensures you find what
            you're looking for in no time.
          </h5>
        </div>
        <div className="cartStyle">
          <h1 className="textStyle">Home</h1>
          <hr />
          <h5>
            The home page welcomes you with a curated selection of featured
            products, hot deals, and trending items. Discover new arrivals and
            stay up-to-date with the latest fashion and technology trends.
          </h5>
        </div>
        <div className="cartStyle">
          <h1 className="textStyle">Products</h1>
          <hr />
          <h5>
            Each product page is a gateway to detailed information about the
            item you're interested in. High-quality images, thorough
            descriptions, specifications, and customer reviews provide all the
            insights you need to make an informed purchase.
          </h5>
        </div>
        <div className="cartStyle">
          <h1 className="textStyle">AboutUs</h1>
          <hr />
          <h5>
            Get to know us better through our comprehensive "About Us" page.
            Learn about our mission, values, and the dedication we put into
            sourcing top-notch products for our valued customers.
          </h5>
        </div>
        <div className="cartStyle">
          <h1 className="textStyle">ContactUs</h1>
          <hr />
          <h5>
            Have questions or feedback? Our "Contact Us" page is here to assist
            you. Reach out to our friendly customer support team via phone or
            email, and we'll be more than happy to help.
          </h5>
        </div>
        <div className="cartStyle">
          <h1 className="textStyle">Cart Icon</h1>
          <hr />
          <h5>
            Keep track of your selected items using the cart icon, conveniently
            located for easy access. Add products as you browse, review your
            choices, and proceed to checkout when you're ready.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
