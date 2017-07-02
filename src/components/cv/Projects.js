import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject((stores) => (
  {
    projects: stores.employee.projects,
    getAllProjects: stores.employee.getAllProjects,
    addProject: stores.employee.addProject,
    updateProject: stores.employee.updateProject,
    deleteProject: stores.employee.deleteProject,
  }
)) @observer
class Projects extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getAllProjects } = this.props;
    getAllProjects();
  }

  updateProject = (event) => {
    const { updateProject } = this.props;
    updateProject('projects', event);
  }

  addProject = (event) => {
    const { addProject } = this.props;
    addProject('projects', event);
  }

  deleteProject = (event) => {
    const { deleteProject } = this.props;
    deleteProject('projects', event);
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="sections-list-item hvr-back-pulse">
        <button className="btn btn-primary btn-round">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <h3 className="text-center">Projects</h3>
        <div className="form-group right-fields">
          <label>Project Name</label>
          <input
            className="my-input-type form-control"
            name="projectName"
            value={projects.projectName}
            onChange={this.updateProject}
          />
        </div>
        <div className="form-group right-fields">
          <label>Period of time</label>
          <input
            className="my-input-type form-control"
            name="periodOfTime"
            value={projects.timeSpent}
            onChange={this.updateProject}
          />
        </div>
        <div className="form-group right-fields">
          <label>Project description</label>
          <textarea
            rows="5"
            cols="50"
            className="my-input-type form-control"
            value={projects.projectDescription}
          />
        </div>
        <div className="form-group right-fields">
          <label>Project roles</label>
          <input
            className="my-input-type form-control"
            name="periodOfTime"
            value={projects.projectRoles}
            onChange={this.updateProject}
          />
        </div>
        <div className="form-group right-fields">
          <button className="btn btn-primary btn-round">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
          <label>Tools&Technologies used</label>
          <input
            className="my-input-type form-control"
            name="toolsAndTechs"
            value={projects.toolsUsed}
            onChange={this.updateProject}
          />
        </div>
        <div className="form-group right-fields">
          <button className="btn btn-primary btn-round">
            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
          </button>
          <label>Responsabilities</label>
          <input
            className="my-input-type form-control"
            name="responsabilities"
            value={projects.responsabilities}
            onChange={this.updateProject}
          />
        </div>
        <button onClick={this.updateProfileRequest} className="btn-submit login">Submit</button>
        <div className="my-past-experiences">
          <ul
            className="form-group right-fields"
            value="projects"
            value={this.getAllProjects}
          >
          {
            projects.map((listItem) => {
              return (
                <li key={listItem.id}>
                  {listItem.projectName},
                  {listItem.projectDescription},
                  {listItem.timeSpent},
                  {listItem.projectRoles},
                  {listItem.toolsUsed},
                  {listItem.responsibilities}
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

Projects.propTypes = {
  projects: PropTypes.object,
  getAllProjects: PropTypes.func,
  addProject: PropTypes.func,
  updateProject: PropTypes.func,
  deleteProject: PropTypes.func,
};

export default Projects;
