import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    const tableContents = [];
    for (let i = 0; i < this.props.grades.length; i++) {
      tableContents.push(<Grade key={this.props.grades[i].id} grade={this.props.grades[i]} />);
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>
          {tableContents}
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
