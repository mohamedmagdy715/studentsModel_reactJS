import { useRef } from 'react'
import { searchStudents } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = ({searchStudents}) => {
    const letters = useRef()
    const searchSync = () => {
        searchStudents(letters.current.value)
    }
    return <div className="d-flex justify-content-center">
    <div className="col-6 text-center">
        <div className="form-group">
            <input ref={letters} className="form-control rounded-pill text-center" type="text" placeholder="enter student name" 
            onChange={searchSync}
            />
        </div>
        <div className="form-group">
            <input className="btn btn-dark w-25" type="button" value="search"
                onClick={searchSync} />
        </div>
    </div>
    </div> 
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchStudents }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)