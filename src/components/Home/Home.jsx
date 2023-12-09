import Banner from "../Banner/Banner";
import Item from "../Pages/Item/Item";
import Join from "../Pages/Join/Join";


const Home = () => {
    return (
        <div className="bg-cyan-400">
          <Banner></Banner>
          <Item></Item>
          <Join></Join>
        </div>
    );
};

export default Home;