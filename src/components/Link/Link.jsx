import PropTypes from "prop-types";

const Link = ({ route }) => {
    return (
        <li className="hover:bg-slate-600 hover:text-white rounded-lg py-1 px-3">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;