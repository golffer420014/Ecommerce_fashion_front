import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";

const Home = () => {

    return (
        <div className=" sm:px-[100px] scroll-smooth">
            <div className="border border-primary my-10 rounded-md mx-2 sm:mx-0">
                <Banner />
            </div>
            <div className="mb-4 font-semibold text-primary text-2xl mx-2 sm:mx-0">
              สินค้ายอดนิยม
            </div>
            <div className="bg-primarySubCon  p-4">
                <ProductList/>
            </div>
        </div>
    );
};

export default Home;
