import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
  }

  handleChange(event) {

  }

  handleSubmit(event) {

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
            <input type="text" name="name" className="form-control" placeholder="Name" />
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-list-alt icon"></i>
              </span>
            </div>
            <input type="text" name="course" className="form-control" placeholder="Course" />
          </div>
        </div>

        <div className="form-group row">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-graduation-cap icon"></i>
              </span>
            </div>
            <input type="text" name="grade" className="form-control" placeholder="Grade" />
          </div>
        </div>

        <div className="button-row">
          <div className="text-right">
            <button type="submit" className="btn btn-success">Add</button>
            <button type="reset" className="ml-2 btn btn-light btn-outline-secondary">Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

export default GradeForm;
