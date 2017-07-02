import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject((stores) => (
  {
    profile: stores.employee.profile,
    getProfile: stores.employee.getProfile,
    updateValue: stores.employee.updateValue,
    updateProfileRequest: stores.employee.updateProfileRequest,
  }
)) @observer
class PersonalDetails extends Component {

  constructor(props) {
    super(props);
  }


  updateProfileValue = (event) => {
    const { updateValue } = this.props;
    updateValue('profile', event);
  }

  render() {
    const { profile } = this.props;
    return (
      <div className="sections-list-item hvr-back-pulse">
        <h3 className="personal-details text-center">Personal Details</h3>
        <div className="photo-name-position">
          <div className="form-group right-fields">
            <img
              id="my-profile-pic"
              width="200"
              height="200"
              alt="Add your profile photo!"
            />
            <input type="file" />
          </div>
          <div className="form-group right-fields">
            <label>Name</label>
            <input
              className="my-input-type form-control"
              name="fullName"
              value={profile.fullName}
              defaultValue={profile.fullName}
              onChange={this.updateProfileValue}
            />
          </div>
          <div className="form-group right-fields">
            <label>Job Position</label>
            <input
              className="my-input-type form-control"
              name="jobTitle"
              value={profile.jobTitle}
              onChange={this.updateProfileValue}
            />
          </div>
        </div>
        <div className="summery">
          <div className="form-group right-fields">
            <label>Summary</label>
            <input
              className="my-input-type form-control"
              name="summary"
              value={profile.summary}
              onChange={this.updateProfileValue}
            />
          </div>
        </div>
        <button onClick={this.updateProfileRequest} className="btn-submit login">Submit</button>
      </div>
    );
  }
}

PersonalDetails.propTypes = {
  profile: PropTypes.object,
  getProfile: PropTypes.func,
  updateValue: PropTypes.func,
};

export default PersonalDetails;
