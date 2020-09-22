import React from 'react';

class Grade extends React.Component {
  render() {
    return (
      <tr>
        <td scope="col">{this.props.grade.name}</td>
        <td scope="col">{this.props.grade.course}</td>
        <td scope="col">{this.props.grade.grade}</td>
      </tr>
    );
  }
}

export default Grade;
