import { getStudentById, clearStudentDetails , deleteStudentById } from '../actions/index'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const StudentDetails = ({ getStudentById, clearStudentDetails,deleteStudentById, details, match, history }) => {
    const id = match.params.id
    useEffect(() => {
        getStudentById(id)

        return ()=>{
            clearStudentDetails()
        }
    },[])

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
              <div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{details.name}</h5>
                    <p className="card-text">Age: {details.age}</p>
                    <p className="card-text">Mobile: {details.phone}</p>
                    <a
                      className="btn btn-danger"
                      onClick={() => {
                        if (window.confirm("Delete the item?")) {
                            {deleteStudentById(details.id)}
                            history.push(`/`)
                        }
                      }}
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            );
        }
        return <p className="alert alert-secondary">Student Not Found</p>;
    }
    return (<div className="alert alert-light">
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentById,clearStudentDetails,deleteStudentById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)
