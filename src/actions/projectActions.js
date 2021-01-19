export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore } ) => {
        //make aync call to database
        const firebase = getFirestore();
        firebase.collection('projects').add({
            ...project,
            authorFirstName: 'net',
            authorLastName: 'ninja',
            authId: 12343,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err: err})
        })        
    } 
}