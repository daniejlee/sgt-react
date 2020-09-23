import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name !== '' && this.state.course !== '' && !isNaN(this.state.grade)) {
      const newGrade = {
        name: this.state.name,
        course: this.state.course,
        grade: parseInt(this.state.grade)
      };
      this.props.addGrade(newGrade);
      this.setState({
        name: '',
        course: '',
        grade: ''
      });
    }
  }

  resetForm() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-user icon"></i>
              </span>
            </div>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Name" />
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-list-alt icon"></i>
              </span>
            </div>
            <input type="text" name="course" value={this.state.course} onChange={this.handleChange} className="form-control" placeholder="Course" />
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-graduation-cap icon"></i>
              </span>
            </div>
            <input type="text" name="grade" value={this.state.grade} onChange={this.handleChange} className="form-control" placeholder="Grade" />
          </div>
        </div>

        <div className="button-row">
          <div className="text-right">
            <button type="submit" className="btn btn-success">Add</button>
            <button type="reset" onClick={this.resetForm} className="ml-2 btn btn-light btn-outline-secondary">Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

export default GradeForm;
