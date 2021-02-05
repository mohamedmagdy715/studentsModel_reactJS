const Student = ({ studentInfo,history }) => {
    const goToDetails = ()=>{
        history.push(`/student/${studentInfo.id}`)
    }

    if (studentInfo) {
        return <div className="alert alert-dark d-flex justify-content-between w-50" 
                    onClick={goToDetails}
                    style={{cursor : "pointer"}}>
            <h4 className="align-self-center">
                {studentInfo.name}
            </h4>
        </div>
    }
}
export default Student;
