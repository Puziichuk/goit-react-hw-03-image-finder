import PropTypes from "prop-types";
import container from "./Container.module.css";

function Container({ children }) {
  return <div className={container.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
