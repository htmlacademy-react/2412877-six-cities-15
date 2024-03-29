import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const.ts';
import { useAppSelector } from '../../hooks/store-hooks.ts';
import { getAuthorizationStatus } from '../../store/user/user-selectors.ts';

type PrivateRouteProps = {
  children: JSX.Element;
  isReverse?: boolean;
}

function PrivateRoute({children, isReverse}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth) ?
      children :
      <Navigate to={isReverse ? AppRoutes.Main : AppRoutes.Login} />
  );
}

export default PrivateRoute;
