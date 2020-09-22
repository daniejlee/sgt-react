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

  addGrade() {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
      // body: JSON.stringify('form')
    })
      .then(response => response.json())
      .then(data => {
        const updatedTodos = this.state.todos.slice();
        updatedTodos.push(data);
        this.setState({ todos: updatedTodos });
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
            <GradeTable grades={this.state.grades} />
          </div>
          <div className="col">
            <GradeForm newGrade={this.addGrade} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
