import { connect } from "react-redux"
import React from "react";
import {getStudentDetails, StudentToggleStatus} from "../../../redux/actions/studentDetails";
import './studentTable.css'

class StudentTable extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isVisible: false
      }
    }

    componentDidMount() {
      // Add animation class after component mounts
      setTimeout(() => {
        this.setState({ isVisible: true });
      }, 100);
    }

    handleStatusChange(status, id) {
      this.props.StudentToggleStatus(status,id,this.props.getStudentDetails);
    }

    buttonTextBasedOnStatus(status) {
      return status ? "block" : "unblock";
    }

    render(){
      if(this.props.students.retrived===false) {
        this.props.getStudentDetails();
        return <div className="loading">Collecting data...</div>;
      }

      return (
        <div className={`main ${this.state.isVisible ? 'visible' : ''}`}>
          <h2 className="title">Students</h2> 
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
                {this.props.students.list.map((val,key)=>(
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td className={`status ${val.status ? 'active' : 'inactive'}`}>
                      {val.status ? 'Active' : 'Inactive'}
                    </td>
                    <td>
                      <button 
                        className={`action-btn ${val.status ? 'block-btn' : 'unblock-btn'}`}
                        onClick={()=>this.handleStatusChange(val.status,val.id)}
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
  students : state.students
});

export default connect(mapStateToProps,{
  getStudentDetails,
  StudentToggleStatus
})(StudentTable);