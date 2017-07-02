import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject((stores) => (
  {
    experience: stores.employee.experience,
    experienceList: stores.employee.experienceList,

    getAllExperience: stores.employee.getAllExperience,
    addExperience: stores.employee.addExperience,
    updateExperience: stores.employee.updateExperience,
    deleteExperience: stores.employee.deleteExperience,
  }
)) @observer
class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = props.experience;
  }

  componentDidMount() {
    const { getAllExperience } = this.props;
    getAllExperience();
  }

  updateExperience = (event) => {
    const { updateExperience } = this.props;
    updateExperience('experience', event);
  }

  addExperience = (event) => {
    const { addExperience } = this.props;
    addExperience('experience', event);
  }

  deleteExperience = (event) => {
    const { deleteExperience } = this.props;
    deleteExperience('experience', event);
  }

  render() {
    const { experience } = this.props;
    const { experienceList } = this.props;
    return (
      <div className="sections-list-item hvr-back-pulse">
        <button className="btn btn-primary btn-round">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <h3 className="text-center">Experience</h3>
        <div className="form-group right-fields">
          <label>Job Position</label>
          <input
            className="my-input-type form-control"
            name="jobTitle"
            value={experience.jobTitle}
            defaultValue={experience.jobTitle}
            onChange={this.updateExperience}
          />
        </div>
        <div className="form-group is-empty right-fields">
          <label>Company</label>
          <input
            className="my-input-type form-control"
            name="company"
            value={this.state.company}
            defaultValue={this.state.company}
            onChange={this.updateExperience}
          />
        </div>
        <div className="form-group right-fields">
          <label>Start Date</label>
          <input
            className="my-input-type form-control"
            type="date"
            // value={this.state.startDate}
            // onChange={this.updateExperience}
          />
        </div>
        <div className="form-group right-fields">
          <label>End Date</label>
          <input
            className="my-input-type form-control"
            type="date"
            // value={this.state.endDate}
            // onChange={this.updateExperience}
          />
        </div>
        <button className="btn-submit login">Submit</button>
        <div className="my-past-experiences">
          <ul
            className="form-group right-fields"
            value={this.getAllExperience}
          >
          {
            experienceList.map((listItem) => {
              return (
                <li key={listItem.id}>{listItem.jobTitle} at {listItem.company} between {listItem.startDate} and {listItem.endDate}</li>
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

Experience.propTypes = {
  experience: PropTypes.object,
  experienceList: PropTypes.object,

  getAllExperience: PropTypes.func,
  addExperience: PropTypes.func,
  updateExperience: PropTypes.func,
  deleteExperience: PropTypes.func,
};

export default Experience;
