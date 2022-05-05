
const Route = ({ path, childern }) => {
  return window.location.pathname === path ? childern : null;
};

export default Route;
