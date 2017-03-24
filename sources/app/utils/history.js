import createBrowserHistory from 'history/lib/createBrowserHistory';
import useRouterHistory from 'react-router/lib/useRouterHistory';

const history = useRouterHistory(createBrowserHistory)({
  basename: '/app'
});

history.listen(({ pathname, hash }, action) => {
  if (location.hash === '#_=_') {
    history.replace(pathname);
  }
});

export default history;
