import React, {useStatee} from "react";
import PropTypes from "prop-types";
import { Link} from "react-router-dom";
import { addExperience } from "../../actions/profile";
import { connect } from "react-redux";

const AddExperience = ({addExperience, history}) => {

    const [formData, setFormData] = useStatee({
        company:"",
        title:"",
        location:"",
        from:"",
        to:"",
        current: false,
        description:""
    });

    const [toDateDisable, toggleDisable] = useStatee(false);

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description
    } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});

  return (
    <>
      <h1 class="large text-primary">Add An Experience</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={e => {
          e.preventDefault();
          addExperience(formData,history);
          }}>
        <div class="form-group">
          <input type="text" placeholder="* Job Title" name="title" value={title} onChange={e => onchange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Company" name="company" value={company} onChange={e => onChange(e)} required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e => onChange(e)}/>
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={e => onChange(e)} />
        </div>
        <div class="form-group">
          <p>
            <input type="checkbox" name="current"checked={current} value={current} onChange={ e => {
                setFormData({...formData, current: !current});
                toggleDisable(!toDateDisable);
            }} />{' '} Current Job
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={e => onChange(e)} disabled={toDateDisable ? "disabled" : ""}/>
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={e => onchange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link class="btn my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
