export const createProject = (project) => {
    return(dispatch, getState ) => {
        //make aync call to database
        dispatch({ type: 'CREATE_PROJECT', project: project})
    } 
}