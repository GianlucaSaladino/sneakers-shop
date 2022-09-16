import "./Home.css";
import CatalogContainer from "../CatalogContainer/CatalogContainer";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://site.innvictus.com/ux/cx/iv/jordan/1up/404993423-iv-jordan-landing-1up-aj1-banner-d.jpg"
        alt="jordanBanner"
      />
      <p className="shop">SHOP</p>
      <CatalogContainer />
    </div>
  );
};

export default Home;
