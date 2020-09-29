import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    const tableContents = [];
    for (let i = 0; i < this.props.grades.length; i++) {
      tableContents.push(<Grade key={this.props.grades[i].id} grade={this.props.grades[i]} deleteGrade={this.props.deleteGrade}/>);
    }
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operations</th>
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
