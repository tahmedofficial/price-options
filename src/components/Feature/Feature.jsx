import PropTypes from "prop-types";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Feature = ({ feature }) => {
    return (
        <div>
            <p className="flex gap-2 items-center">
                <IoMdCheckmarkCircleOutline />
                {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;