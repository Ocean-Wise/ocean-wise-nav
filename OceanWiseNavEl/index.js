/**
*
* OceanWiseNavEl
*
*/

import React from 'react';
import onClickOutside from 'react-onclickoutside';
import HelloBar from './HelloBar';


class OceanWiseNavEl extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      active: false,
    };
    this.setState = this.setState.bind(this);
    // this.setWrapperRef = this.setWrapperRef.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // setWrapperRef(node) {
  //   console.log(node);
  //   this.wrapperRef = node;
  // }
  //
  // handleClickOutside(event) {
  //   console.log(this.wrapperRef);
  //   console.log(event.target);
  //   if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.active) {
  //     this.toggleActive();
  //   }
  // }

  handleClickOutside = evt => {
    if (this.state.active) {
      this.toggleActive();
    }
  }

  toggleActive() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const isIE = /* @cc_on!@ */false || !!document.documentMode;
    return (
      <HelloBar ref={this.setWrapperRef}>
        <div style={{ display: 'inline-flex' }}>
          <div className="hello-bar-text">
            Explore <span className="hello-bar-hide-mobile"> more at </span><a href="https://ocean.org" target="_blank">ocean.org</a>
          </div>
        </div>


        <div className="hello-bar-logo-toggle" style={isIE ? { width: 147 } : {}}>
          <img alt="logo" className="hello-bar-logo" src="https://dev.ryanmurray.ca/ow/ow-logo.svg" />
          <button className={this.state.active ? 'hello-bar-btn hello-bar-btn-open' : 'hello-bar-btn hello-bar-btn-closed'} onClick={() => this.toggleActive()}>
            <img alt="chevron" className="hello-bar-icon" src="https://dev.ryanmurray.ca/ow/chevron.svg" />
          </button>
        </div>

        <div className={this.state.active ? 'hello-bar-menu hello-bar-menu-open' : 'hello-bar-menu hello-bar-menu-closed'}>
          <ul className="hello-bar-nav">
            <li><a href="https://ocean.org" target="_blank">Ocean Wise</a></li>
            <li><a href="http://vanaqua.org" target="_blank">Vancouver Aquarium</a></li>
            <li><a href="https://ocean.org/seafood" target="_blank">Sustainable Seafood</a></li>
            <li><a href="https://research.ocean.org/" target="_blank">Ocean Wise Research</a></li>
            <li><a href="https://shorelinecleanup.ca" target="_blank">Shoreline Cleanup</a></li>
            <li><a href="https://ocean.org/research" target="_blank">Ocean Research</a></li>
            <li><a href="https://ocean.org/education" target="_blank">Ocean Education</a></li>
            <li><a href="http://wildwhales.org" target="_blank">Whale Sightings</a></li>
            <li><a href="https://aquablog.ca/" target="_blank">Aquablog</a></li>
            <li><a href="https://ocean.org/donate" target="_blank">Donate</a></li>
          </ul>
        </div>

      </HelloBar>
    );
  }
}

export default onClickOutside(OceanWiseNavEl);
