import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'next/router'

export default function withTracker(WrappedComponent, options = {}) {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.router.pathname;
      trackPage(page);
    }

    componentDidUpdate(nextProps) {
      const currentPage = this.props.router.pathname;
      const nextPage = nextProps.router.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return withRouter(HOC);
}
