import PropTypes from 'prop-types';
// components
import AppLayout from './AppLayout';
import LandingLayout from './LandingLayout';

// ----------------------------------------------------------------------

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf ([
    'about-us',
    'dydx',
    'privacy-policy',
    'terms-of-use',
    'volume',
    'vertex',
  ]),
};

export default function Layout({variant = 'dashboard', children}) {
  if (
    variant === 'about-us' ||
    variant === 'dydx' ||
    variant === 'privacy-policy' ||
    variant === 'terms-of-use' ||
    variant === 'volume' ||
    variant === 'vertex'
  ) {
    return <AppLayout> {children} </AppLayout>;
  }

  return <LandingLayout> {children} </LandingLayout>;
}
