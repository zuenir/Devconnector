import axios from 'axios';
import { setAlert } from './alert';
import { 
    GET_PROFILE, 
    PROFILE_ERROR, 
    CLEAR_PROFILE, 
    UPDATE_PROFILE,
    ACCOUNT_DELETE,
    GET_PROFILES,
    GET_REPOS } from "./types";


//Get current users profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })
    }
}

//Get All Profiles
export const getCurrentProfiles = () => async dispatch => {
    dispatch({type:CLEAR_PROFILE});

    try {
        const res = await axios.get('/api/profile');
        dispatch({
            type: GET_PROFILES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })
    }
}

//Get All Profiles by ID
export const getCurrentProfileById = userId => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })
    }
}

//Get Github repos
export const getGitHubRepos = username => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/github/${username}`);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })
    }
}

//Create or Update profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        const res = await axios.post("/api/profile",formData,config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

        dispatch(setAlert(edit ? "Profile Update": "Profile Created","success"));

        if(!edit){
            history.push("/dasboard");
        }

    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })       
    }
}

//Add Experience
export const addExperience = (formData, history) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        const res = await axios.put("/api/profile/experience",formData,config);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert("Experience Added","success"));
        history.push("/dasboard");
       
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })       
    }
}


//Add Education
export const addEducation = (formData, history) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-Type":"application/json"
            }
        }

        const res = await axios.put("/api/profile/education",formData,config);
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        })

        dispatch(setAlert("Education Added","success"));
        history.push("/dasboard");
       
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        })       
    }
}

//Delete experience
export const deleteExperience = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/experience/${id}`);
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert("Experience Removed","success"));
        
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        }) 
    }
}


//Delete education
export const deleteEducation = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/education/${id}`);
        dispatch({
            type:UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert("Education Removed","success"));
        
    } catch (error) {
        const errors = error.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: {msg: error.response.statusText, status:error.response.status}
        }) 
    }
}

//Delete account & profile
export const deleteAccount = () => async dispatch => {
    
    if(window.confirm("Are you sure? This can NOT be undone!")){
        try {
            await axios.delete(`/api/profile`);
            dispatch({type:CLEAR_PROFILE});
            dispatch({type:ACCOUNT_DELETE});
            dispatch(setAlert("Your account has been permanantly deleted"));
            
        } catch (error) {
            const errors = error.response.data.errors;
    
            if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
            }
    
            dispatch({
                type: PROFILE_ERROR,
                payload: {msg: error.response.statusText, status:error.response.status}
            }) 
        }
    }
}