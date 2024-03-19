import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {

    const { name, price, features } = option;
    return (
        <div className="bg-gray-200 rounded-lg p-4 flex flex-col">
            <h2>
                <span className="text-7xl">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-3xl">{name}</h4>
            <div className="pl-6 pt-5 flex-grow">
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-white p-3 rounded-lg hover:bg-blue-400">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;