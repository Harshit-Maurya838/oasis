import { Link, useLocation } from "react-router-dom";
import '../../styles/utils/breadcrums.utils.styles.css'

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcum">
      <Link to="/home">Homepage</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={name} className="bnav-item">
            &nbsp; &gt; {!isLast ? <Link to={routeTo}>{name}</Link> : <span>{name}</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
