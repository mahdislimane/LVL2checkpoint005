import React from "react";
import PropTypes from "prop-types";
export default function Profile(props) {
  const handleName = (x) => {
    alert(`bonjour ${x}`);
  };
  return (
    <div onLoad={handleName(props.fullName)}>
      <h1>{props.fullName}</h1>
      <img src={props.children} alt=""></img>
      <h3>{props.profession}</h3>
      <p>{props.bio}</p>
    </div>
  );
}
Profile.defaultProps = {
  fullName: "Mahdi",
  bio: "33ans de vie",
  profession: "future programmeur",
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.string,
};
