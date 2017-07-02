import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject((stores) => (
  {
    skillCategory: stores.employee.skillCategory,

    skills: stores.employee.skills,
    skillsCategories: stores.employee.skillsCategories,
    mySkillsList: stores.employee.mySkillsList,

    getSkillCategories: stores.employee.getSkillCategories,
    getSkills: stores.employee.getSkills,
    updateSkillCategory: stores.employee.updateSkillCategory,
    updateSkill: stores.employee.updateSkill,
    addSkill: stores.employee.addSkill,
    deleteSkill: stores.employee.deleteSkill,
  }
)) @observer
class SkillsSection extends Component {

  constructor(props) {
    super(props);
    this.state = props.skills;
  }

  componentDidMount() {
    const { getSkillCategories } = this.props;
    const { getSkills } = this.props;
    getSkillCategories();
    getSkills();
  }

  updateSkill = (event) => {
    const { updateSkill } = this.props;
    updateSkill('skills', event);
  }

  addSkill = (event) => {
    const { addSkill } = this.props;
    addSkill('skills', event);
  }

  deleteSkill = (event) => {
    const { deleteSkill } = this.props;
    deleteSkill('skills', event);
  }

  render() {
    const { skills } = this.props;
    const { skillsCategories } = this.props;
    const { mySkillsList } = this.props;
    return (
      <div className="sections-list-item hvr-back-pulse">
        <button className="btn btn-primary btn-round">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <h3 className="text-center">Skills</h3>
        <div className="skills-categories">
          <div className="form-group right-fields">
            <label>Skill Category</label>
            <select
              className="my-select-type form-control"
              name="Category"
              value={this.getSkillCategories}
              onChange={this.updateSkillCategory}
            >
              {
                skillsCategories.map((listItem) => {
                  return (
                    <option key={listItem.id}>{listItem.name}</option>
                  );
                }
              )
              }
            </select>
            <label>Skill Name</label>
            <input
              className="my-input-type form-control"
              name="name"
              value={this.state.skills}
              onChange={this.updateSkill}
            />
          </div>
        </div>
        <button onClick={this.updateSkill} className="btn-submit login">Submit</button>
        <div className="my-past-experiences">
          <ul
            className="form-group right-fields"
            value="mySkillsList"
            value={this.getSkills}
          >
          {
            mySkillsList.map((listItem) => {
              return (
                <li key={listItem.id}>{listItem.name}</li>
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

SkillsSection.propTypes = {
  skillsCategories: PropTypes.object,

  skills: PropTypes.object,
  skillCategory: PropTypes.object,
  mySkillsList: PropTypes.object,

  getSkillCategories: PropTypes.func,
  getSkills: PropTypes.func,
  updateSkillCategory: PropTypes.func,
  updateSkill: PropTypes.func,
  addSkill: PropTypes.func,
  deleteSkill: PropTypes.func,
};

export default SkillsSection;
