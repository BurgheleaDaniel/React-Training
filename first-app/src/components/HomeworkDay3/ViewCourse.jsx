import React from "react";
import PropTypes from "prop-types";
import styles from "./Course.module.css";

const ViewCourse = (props) => {
  const { course } = props;
  return <h3 className={styles.courseDisplay}>Course name: {course}</h3>;
};

ViewCourse.propTypes = {
  course: PropTypes.string,
};

ViewCourse.defaultProps = {
  course: "",
};

export default ViewCourse;
