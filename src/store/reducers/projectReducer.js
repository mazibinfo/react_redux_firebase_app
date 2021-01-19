const initState = {
    projects: [
        {id:"1", title:"title 1"},
        {id:"2", title:"title 2"},
        {id:"3", title:"title 3"}
    ]    
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer