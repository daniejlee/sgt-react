import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="row justify-content-between">
        <div className="col-8">
          <h1>Student Grade Table</h1>
        </div>
        <div className="col text-right">
          <h3>Average Grade <span id="average-grade" className="badge badge-secondary">{this.props.avgGrade}</span></h3>
        </div>
      </header>
    );
  }
}

export default Header;
