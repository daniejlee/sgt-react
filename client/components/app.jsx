import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };

    this.addGrade = this.addGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(response => {
        if (!response.ok) {
          throw new Error('Fetch request has failed');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      })
      .catch(error => console.error(error));
  }

  getAverageGrade() {
    if (this.state.grades.length > 0) {
      const sum = this.state.grades.reduce((total, curr) => (total + curr.grade), 0);
      return Math.round(sum / this.state.grades.length);
    }
  }

  addGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
        const updatedGrades = this.state.grades.slice();
        updatedGrades.push(data);
        this.setState({ grades: updatedGrades });
      })
      .catch(error => {
        console.error(error);
      });
  }

  deleteGrade(gradeId) {
    const selectedIndex = this.state.grades.findIndex(grade => grade.id === gradeId);
    fetch(`/api/grades/${gradeId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        const updatedGrades = this.state.grades.slice();
        updatedGrades.splice(selectedIndex, 1);
        this.setState({ grades: updatedGrades });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <Header avgGrade={this.getAverageGrade()}/>
        <div className="row">
          <div className="col-8">
            <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} />
          </div>
          <div className="col">
            <GradeForm addGrade={this.addGrade} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
