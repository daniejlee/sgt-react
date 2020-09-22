import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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

  render() {
    return (
      <div>
        <Header avgGrade={this.getAverageGrade()}/>
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
