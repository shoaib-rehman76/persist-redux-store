import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RequiredAuth = ({ children }) => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  if (!userInfo) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RequiredAuth;
