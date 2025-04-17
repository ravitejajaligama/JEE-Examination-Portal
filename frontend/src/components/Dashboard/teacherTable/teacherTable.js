import { connect } from "react-redux"
import React from "react";
import {getTeacherDetails, TeacherToggleStatus} from "../../../redux/actions/teacherDetails";
import './teacherTable.css'

class TeacherTable extends React.Component {
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
      this.props.TeacherToggleStatus(status,id,this.props.getTeacherDetails);
    }

    buttonTextBasedOnStatus(status) {
      return status ? "block" : "unblock";
    }

    render(){
      if(this.props.teachers.retrived===false) {
        this.props.getTeacherDetails();
        return <div className="loading">Collecting data...</div>;
      }

      return (
        <div className={`main ${this.state.isVisible ? 'visible' : ''}`}>
          <h2 className="title">Teachers</h2> 
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
                {this.props.teachers.list.map((val,key)=>(
                  <tr key={key}>
                    <td className="teacher-name">{val.name}</td>
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
  teachers : state.teachers
});

export default connect(mapStateToProps,{
  getTeacherDetails,
  TeacherToggleStatus
})(TeacherTable);