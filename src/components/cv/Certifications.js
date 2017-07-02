import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject((stores) => (
  {
    certifications: stores.employee.certifications,
    getAllCertifications: stores.employee.getAllCertifications,
    addCertification: stores.employee.addCertification,
    updateCertification: stores.employee.updateCertification,
    deleteCertification: stores.employee.deleteCertification,
  }
)) @observer
class Certifications extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getAllCertifications } = this.props;
    getAllCertifications();
  }

  updateCertification = (event) => {
    const { updateCertification } = this.props;
    updateCertification('certifications', event);
  }

  addCertification = (event) => {
    const { addCertification } = this.props;
    addCertification('certifications', event);
  }

  deleteCertification = (event) => {
    const { deleteCertification } = this.props;
    deleteCertification('certifications', event);
  }

  render() {
    const { certifications } = this.props;
    return (
      <div className="sections-list-item hvr-back-pulse">
        <button className="btn btn-primary btn-round">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <h3 className="text-center">Certifications</h3>
        <div className="form-group right-fields">
          <label>Certification</label>
          <input
            className="my-input-type form-control"
            name="certificationName"
            value={certifications.certification}
            onChange={this.updateCertification}
          />
        </div>
        <div className="form-group right-fields">
          <label>Date</label>
          <input
            className="my-input-type form-control"
            type="date"
            value={certifications.date}
            onChange={this.updateCertification}
          />
        </div>
        <button onClick={this.updateProfileRequest} className="btn-submit login">Submit</button>
        <div className="my-past-experiences">
          <ul
            className="form-group right-fields"
            value="certifications"
            value={this.getAllCertifications}
          >
          {
            certifications.map((listItem) => {
              return (
                <li key={listItem.id}>
                  {listItem.title},
                  {listItem.date},
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

Certifications.propTypes = {
  certifications: PropTypes.object,
  getAllCertifications: PropTypes.func,
  addCertification: PropTypes.func,
  updateCertification: PropTypes.func,
  deleteCertification: PropTypes.func,
};

export default Certifications;
