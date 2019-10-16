import PropTypes from 'prop-types'
import Redirect from 'umi/redirect'
import pathToRegexp from 'path-to-regexp'
import OpenPageLayout from './OpenPageLayout'

export default function Layout({ location, route, children }) {
  if (location && location.pathname === '/index.html') {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    )
  }

  if (checkIfPageExist(route, location)) {
    return <OpenPageLayout>{children}</OpenPageLayout>
  }
  return (
    <Redirect
      to={{
        pathname: '/o/404',
        search: `?from=${encodeURIComponent(location.pathname)}`
      }}
    />
  )
}

Layout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  route: PropTypes.any,
  children: PropTypes.any
}

const availableRouteMatcher = []

function checkIfPageExist(route, location) {
  if (!route || !route.routes) {
    return false
  }

  const { pathname } = location

  if (!availableRouteMatcher.length) {
    const routes = route.routes.map(r => r.path).filter(r => !!r)
    availableRouteMatcher.push(...routes.map(r => pathToRegexp(r)))
  }

  return availableRouteMatcher.some(m => m.exec(pathname))
}
