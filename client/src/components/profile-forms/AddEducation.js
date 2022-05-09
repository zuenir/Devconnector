import React, { useStatee } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { addEducation } from "../../actions/profile";
import { connect } from "react-redux";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useStatee({
    school:"",
    degree:"",
    fieldofstudy:"",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisable, toggleDisable] = useStatee(false);

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 class="large text-primary">Add Your Education</h1>
      <p class="lead">
        <i class="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
        you have attended
      </p>
      <small>* = required field</small>
      <form class="form" onSubmit={e => {
          e.preventDefault();
          addEducation(formData, history);
      }}>
        <div class="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Field Of Study" name="fieldofstudy"  value={fieldofstudy} onChange={e => onChange(e)}/>
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={e => onChange(e) }/>
        </div>
        <div class="form-group">
          <p>
            <input type="checkbox" name="current" checked={current} value={current} onChange={e => {
                setFormData({...formData, current:!current});
                toggleDisable(!toDateDisable);
            }}/>{' '} Current School
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
            placeholder="Program Description"
            value={description}
            onChange={e => onChange(e)}
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

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
