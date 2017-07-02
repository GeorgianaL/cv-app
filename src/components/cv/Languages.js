import React, { Component, PropTypes } from 'react';
import { inject, observer } from 'mobx-react';

@inject((stores) => (
  {
    languages: stores.employee.languages,
    languagesList: stores.employee.languagesList,
    getAllLanguages: stores.employee.getAllLanguages,
    addLanguage: stores.employee.addLanguage,
    updateLanguage: stores.employee.updateLanguage,
    deleteLanguage: stores.employee.deleteLanguage,
  }
)) @observer
class Languages extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getAllLanguages } = this.props;
    getAllLanguages();
  }

  updateLanguage = (event) => {
    const { updateLanguage } = this.props;
    updateLanguage('languages', event);
  }

  addLanguage = (event) => {
    const { addLanguage } = this.props;
    addLanguage('languages', event);
  }

  deleteLanguage = (event) => {
    const { deleteLanguage } = this.props;
    deleteLanguage('languages', event);
  }

  render() {
    const { languages } = this.props;
    // const { languagesList } = this.props;
    return (
      <div className="sections-list-item hvr-back-pulse">
        <button className="btn btn-primary btn-round">
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>
        <h3 className="text-center">Languages</h3>
        <div className="select-a-language">
          <div className="form-group right-fields">
            <label>Language</label>
            <select
              className="my-select-type form-control"
              name="language"
              // value={languages.languagesList}
              onChange={this.updateLanguage}
            >
              {/* {
                languagesList.map((listItem) => {
                  return (
                    <option key={listItem.id}>{listItem.code}</option>
                  );
                }
              )
              }*/}
            </select>
          </div>
          <div className="form-group right-fields">
            <label>Understanding</label><br />
            <label className="lang-type">Listening</label>
            <button
              type="button"
              className="btn btn-primary btn-round"
              data-toggle="popover"
              data-placement="left"
              title data-content="Hereajkdasfs dfbhdrfbhdfebn"
              data-container="body"
              data-original-title="Popover on left"
            >
              <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
            </button>
            <select
              className="my-select-type form-control listening"
              name="understandingListening"
              value={languages.understandingListening}
              onChange={this.updateLanguage}
            >
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
              <option>C2</option>
            </select>
            <label className="lang-type">Reading</label>
            <button className="btn btn-primary btn-round">
              <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
            </button>
            <select
              className="my-select-type form-control reading"
              name="understandingReading"
              value={languages.understandingReading}
              onChange={this.updateLanguage}
            >
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
              <option>C2</option>
            </select>
          </div>
          <div className="form-group right-fields">
            <label>Speaking</label><br />
            <label className="lang-type">Spoken interaction</label>
            <button className="btn btn-primary btn-round">
              <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
            </button>
            <select
              className="my-select-type form-control spoken-i"
              name="spokenInteraction"
              value={languages.spokenInteraction}
              onChange={this.updateLanguage}
            >
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
              <option>C2</option>
            </select>
            <label className="lang-type">Spoken production</label>
            <button className="btn btn-primary btn-round">
              <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
            </button>
            <select
              className="my-select-type form-control spoken-p"
              name="spokenProduction"
              value={languages.spokenProduction}
              onChange={this.updateLanguage}
            >
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
              <option>C2</option>
            </select>
          </div>
          <div className="form-group right-fields">
            <label className="lang-type">Writing</label>
            <button className="btn btn-primary btn-round">
              <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
            </button>
            <select
              className="my-select-type form-control writing"
              name="writing"
              value={languages.writing}
              onChange={this.updateLanguage}
            >
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
              <option>C2</option>
            </select>
          </div>
        </div>
        <button onClick={this.updateLanguage} className="btn-submit login">Submit</button>
        <div className="my-past-experiences">
          <ul
            className="form-group right-fields"
            value="languages"
            value={this.getAllLanguages}
          >
          {
            languages.map((listItem) => {
              return (
                <li key={listItem.id}>
                  {listItem.code},
                  {listItem.understandingListening},
                  {listItem.understandingReading},
                  {listItem.spokenInteraction},
                  {listItem.spokenProduction},
                  {listItem.writing}
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

Languages.propTypes = {
  languages: PropTypes.object,
  languagesList: PropTypes.object,
  getAllLanguages: PropTypes.func,
  addLanguage: PropTypes.func,
  updateLanguage: PropTypes.func,
  deleteLanguage: PropTypes.func,
};

export default Languages;
