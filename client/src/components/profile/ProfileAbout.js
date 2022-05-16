import React from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div class="profile-about bg-light p-2">
      {bio && (
        <>
          <h2 class="text-primary">{name.trim().split('')[0]}s Bio</h2>
          <p>{bio}</p>
          <div class="line"></div>
        </>
      )}
      {skills && (
          <>
            <h2 class="text-primary">Skill Set</h2>
            <div class="skills">
                {skills.slice(0,4).map((skill,index)=> (
                    <div class="p-1" key={index}>
                        <i class="fas fa-check"></i> {skill}
                    </div>
                ))}
            </div>
          </>
      )}
    </div>
  );
};

ProfileAbout.propTypes = {};

export default ProfileAbout;
