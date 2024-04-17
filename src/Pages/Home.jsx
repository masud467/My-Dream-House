import { Helmet } from "react-helmet-async";
import Estates from "../Components/Estates/Estates";
import SliderBanner from "../Components/SliderBanner/SliderBanner";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const estates = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>My Dream House | home</title>
            </Helmet>
            <SliderBanner></SliderBanner>
            
            <div className="grid grid-cols-2 gap-5">
                {
                    estates.map(estate => <Estates key={estate.id} data={estate}></Estates>)
                }
            </div>
        </div>
    );
};

export default Home;