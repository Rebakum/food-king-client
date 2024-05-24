import FeatureFoods from '../FeaturFoods/FeatureFoods';
import Slider from "../Slider/Slider";
import MushroomsFood from '../../Components/MushroomsFood';
import PopularFoods from '../../Components/PopularFoods';



const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <FeatureFoods></FeatureFoods>
            <MushroomsFood></MushroomsFood>
            <PopularFoods></PopularFoods>
        </div>
    );
};

export default Home;