import Modal from "react-bootstrap/Modal";
import { useRef } from 'react'
import { addStudent } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const AddStudent = ({show, handleClose, addStudent})=>{
    const studentName = useRef();
    const studentAge = useRef();
    const studentPhone = useRef();
    const myForm = useRef();
    const addOne = ()=>{
        console.log(myForm);
        debugger;
        handleClose();
        let student = {
            "name": studentName.current.value,
            "age": parseInt(studentAge.current.value),
            "phone": studentPhone.current.value
        }
        addStudent(student);
    }

    return (
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add a new student</Modal.Title>
        </Modal.Header>
        <form ref={myForm} onSubmit={addOne}>
          <Modal.Body>
            <div class="form-group">
              <label for="name">Student name</label>
              <input
                ref={studentName}
                type="text"
                name="stdName"
                id="name"
                class="form-control"
                placeholder="enter student name"
                aria-describedby="helpId"
                required
                pattern="^([a-zA-Z]+\s)*[a-zA-Z]+$"
              />
              <small id="helpId" class="text-muted">
                Enter characters only
              </small>
            </div>
            <div class="form-group">
              <label for="age">Student age</label>
              <input
                ref={studentAge}
                type="number"
                name="stdAge"
                id="age"
                class="form-control"
                placeholder="enter student age"
                aria-describedby="helpId"
                required
                min="18"
                max="60"
              />
              <small id="helpId" class="text-muted">
                Enter age between 18 and 60{" "}
              </small>
            </div>
            <div class="form-group">
              <label for="phone">Student phone</label>
              <input
                ref={studentPhone}
                type="text"
                name="stdPhone"
                id="phone"
                class="form-control"
                placeholder="enter student phone"
                aria-describedby="helpId"
                required
                pattern="^01[0-2]\d{8}$"
              />
              <small id="helpId" class="text-muted">
                Enter a valid phone
              </small>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-success" type="submit">
              Add student
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addStudent }, dispatch)
}
export default connect(null, mapDispatchToProps)(AddStudent)