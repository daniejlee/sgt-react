import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteGrade(this.props.grade.id);
  }

  render() {
    return (
      <tr>
        <td scope="col">{this.props.grade.name}</td>
        <td scope="col">{this.props.grade.course}</td>
        <td scope="col">{this.props.grade.grade}</td>
        <td scope="col">
          <button className="btn btn-outline-danger" onClick={this.handleClick}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default Grade;
