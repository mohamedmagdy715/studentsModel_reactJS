const baseURL = "http://localhost:3001/students";

export const getStudents = async () => {
    let payload;
    try{
        let response = await fetch(baseURL);
        payload = await response.json();
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}

export const searchStudents = (searchKey)=>{
    return {
        type: 'SEARCH_STUDENTS_LIST',
        payload : searchKey
    }
}

export const getStudentById = async (id)=>{
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`);
        payload = await response.json();
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }
}

export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_STUDENT_DETAILS',
        payload:null
    }
}

export const deleteStudentById = async (id)=>{
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`,{method : 'DELETE'});
        payload = "Deleted successfully"
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }
}

export const addStudent = async (student)=>{
    let payload;
    try{
        let response = await fetch(baseURL, {
          method: "POST",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer",
          body: JSON.stringify(student),
        });
        payload = "Added successfully"
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_ADDED',
        payload
    }
}
