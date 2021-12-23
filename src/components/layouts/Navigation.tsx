import Link from 'next/link';
import { ROUTES } from '../../constants';

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
  SUBS?: Array<ROUTE>;
}

export const Navigation = () => {
  return (
    <header>
      <h1>Wine and Beers</h1>
      <nav>
        <ul>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={routeObject.LABEL}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
                <ul>
                  {routeObject?.SUBS.map((subRouteObject: ROUTE) => {
                    return (
                      <li key={subRouteObject.LABEL}>
                        <Link
                          href={`${routeObject.PATH}${subRouteObject.PATH}`}
                        >
                          <a>{subRouteObject.LABEL}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
