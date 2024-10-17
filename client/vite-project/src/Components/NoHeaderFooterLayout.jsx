import PropTypes from 'prop-types';

const NoHeaderFooterLayout = ({ children }) => {
  return (
    <div className="no-header-footer-layout">
      {children}
    </div>
  );
};

NoHeaderFooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NoHeaderFooterLayout;