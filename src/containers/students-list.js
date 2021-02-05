import { connect } from 'react-redux';
import Student from '../components/student';
import { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { getStudents } from '../actions'

const StudentsList = ({ getStudents, list ,history,search})=> {


    useEffect(() => {
      getStudents();
    }, []);

    if (list) {
      if (search) {
        let filteredList = list.filter((student) => {
          return student.name.toLowerCase().includes(search);
        });
        if (filteredList.length > 0) {
          return (
            <div className="alert ">
              {filteredList.map((student) => {
                return (
                  <Student
                    key={student.id}
                    studentInfo={student}
                    history={history}
                  />
                );
              })}
            </div>
          );
        } else {
          return <p className="alert alert-secondary">Student Not Found</p>;
        }
      }
      if (list.length > 0)
        return (
          <div className="alert ">
            {list.map((student) => {
              return (
                <Student
                  key={student.id}
                  studentInfo={student}
                  history={history}
                />
              );
            })}
          </div>
        );
    }
    return <p>Enter a student name and search.</p>;
  }

const mapStateToProps = (state) => {
    return {
        list: state.students.list,
        search : state.students.search
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudents}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentsList)