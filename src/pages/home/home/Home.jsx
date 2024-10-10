import Banner from "../banner/Banner";
import Feature from "../feature/Feature";
import HomeProduct from "../homeProduct/HomeProduct";

const Home = () => {
  return (
    <div>
        {/* hero section */}
      <Banner/>

      <Feature/>

      <HomeProduct/>
      
    </div>
  );
};

export default Home;
