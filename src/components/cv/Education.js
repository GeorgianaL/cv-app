import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject((stores) => (
  {
    education: stores.employee.education,
    getAllEducation: stores.employee.getAllEducation,
    addEducation: stores.employee.addEducation,
    updateEducation: stores.employee.updateEducation,
    deleteEducation: stores.employee.deleteEducation,
  }
)) @observer
class Education extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getAllEducation } = this.props;
    getAllEducation();
  }

  updateEducation = (event) => {
    const { updateEducation } = this.props;
    updateEducation('education', event);
  }

  addEducation = (event) => {
    const { addEducation } = this.props;
    addEducation('education', event);
  }

  deleteEducation = (event) => {
    const { deleteEducation } = this.props;
    deleteEducation('education', event);
  }
  render() {
    const { education } = this.props;
    return (
      <div className="sections-list-item hvr-back-pulse">
        <button className="btn btn-primary btn-round">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <h3 className="text-center">Education</h3>
        <div className="form-group right-fields">
          <label>Institution</label>
          <input
            className="my-input-type form-control"
            name="institution"
            value={education.institutionName}
            onChange={this.updateEducation}
          />
        </div>
        <div className="form-group right-fields">
          <label>Date</label>
          <input
            className="my-input-type form-control"
            type="date"
            value={education.graduationYear}
            onChange={this.updateEducation}
          />
        </div>
        <button onClick={this.updateProfileRequest} className="btn-submit login">Submit</button>
        <div className="my-past-experiences">
          <ul
            className="form-group right-fields"
            value="education"
            value={this.getAllEducation}
          >
          {
            education.map((listItem) => {
              return (
                <li key={listItem.educationId}>
                  {listItem.institutionName},
                  {listItem.degree},
                  {listItem.graduationYear},
                </li>
              );
            }
          )
          }
          </ul>
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.object,
  getAllEducation: PropTypes.func,
  addEducation: PropTypes.func,
  updateEducation: PropTypes.func,
  deleteEducation: PropTypes.func,
};

export default Education;
