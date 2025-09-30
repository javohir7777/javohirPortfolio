import PropTypes from "prop-types";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../reducers/rootReducer";

export const Store = createStore(rootReducer);

const StoreProvider = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

export default StoreProvider;
