import React from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import { PageLoader } from '../components';
import { isPageLoaderVisibleSelector } from '../../redux/common.js/common.selectors';

const PageLoaderContainer = ({ isVisible }) => (
  <PageLoader isVisible={isVisible} />
);

PageLoaderContainer.propTypes = {
  isVisible: bool.isRequired,
};

const mapStateToProps = state => ({
  isVisible: isPageLoaderVisibleSelector(state),
});

export default connect(mapStateToProps)(PageLoaderContainer);
