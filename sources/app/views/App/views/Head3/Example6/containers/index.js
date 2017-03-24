import React, { Component } from 'react';

class WeeklyWage extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>WeeklyWage</div>
    );
  }
}

export default WeeklyWage;
