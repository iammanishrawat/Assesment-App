import { Link, useLocation, useParams } from "react-router-dom";
import { useTypedSelector } from "redux/store";
import Breadcrumb from "react-bootstrap/Breadcrumb";

interface Props {
  title?: string;
}

const BreadcrumbComponent = ({ title = "HealthPresso" }: Props) => {
  const location = useLocation();
  const { id } = useParams();
  const getBreadcrumbFromPath = (pathname = "") => {
    const urls = pathname?.split("/");
    if(id) urls.pop();
    return urls;
  };
  const removeDashFromTitle = (title = "") => title?.replaceAll("-", " ");

  return (
    <Breadcrumb
      className={`breadcrumbs`}
    >
      {getBreadcrumbFromPath(location.pathname)?.map(
        (route: string, index: number) => {
          if (index > 0 && !route) return;
          return (
            <Breadcrumb.Item
              linkAs={"span"}
              key={`${index}_${route}`}
              active={
                index === getBreadcrumbFromPath(location.pathname)?.length - 1
              }
              // href={(index === 0) ? !!isSuperAdmin ? "/users" : "/dashboard" : `/${route}`}
              className="text-capitalize"
            >
              {index ===
              getBreadcrumbFromPath(location.pathname)?.length - 1 ? (
                index === 0 ? (
                  title
                ) : (
                  removeDashFromTitle(route)
                )
              ) : (
                <Link to={index === 0 ? "/dashboard" : `/${route}`}>
                  {index === 0 ? title : removeDashFromTitle(route)}
                </Link>
              )}
            </Breadcrumb.Item>
          );
        }
      )}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
