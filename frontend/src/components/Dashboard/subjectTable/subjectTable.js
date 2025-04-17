import { connect } from "react-redux"
import React from "react";
import {getSubjectDetails, SubjectToggleStatus} from "../../../redux/actions/subjectDetails";
import './subjectTable.css'

class SubjectTable extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isVisible: false
      }
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isVisible: true });
      }, 100);
    }

    handleStatusChange(status, id) {
      this.props.SubjectToggleStatus(status, id, this.props.getSubjectDetails);
    }

    buttonTextBasedOnStatus(status) {
      return status ? "block" : "unblock";
    }

    render() {
      if(this.props.subjects.retrived === false) {
        this.props.getSubjectDetails();
        return <div className="loading">Loading subjects...</div>;
      }

      return (
        <div className={`main ${this.state.isVisible ? 'visible' : ''}`}>
          <h2 className="title">Subjects</h2> 
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.subjects.list.map((val, key) => (
                  <tr key={key} className="table-row">
                    <td className="subject-name">{val.subject}</td>
                    <td className={`status ${val.status ? 'active' : 'inactive'}`}>
                      {val.status ? 'Active' : 'Inactive'}
                    </td>
                    <td className="action-cell">
                      <button 
                        className={`action-btn ${val.status ? 'block-btn' : 'unblock-btn'}`}
                        onClick={() => this.handleStatusChange(val.status, val.id)}
                      >
                        {this.buttonTextBasedOnStatus(val.status)}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  subjects: state.subjects
});

export default connect(mapStateToProps, {
  getSubjectDetails,
  SubjectToggleStatus
})(SubjectTable);