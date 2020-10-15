import React, { useState } from "react";
import ViewCourse from "./ViewCourse";
import styles from "./Course.module.css";

const HomeworkDay3 = () => {
  const [course, setCourse] = useState("");
  const [courseDisplay, setCourseDisplay] = useState("");

  const handleChange = (e) => {
    setCourse(e.target.value);
  };

  const addCourseDisplay = () => {
    setCourseDisplay(course);
    setCourse("");
  };

  const resetCourse = () => {
    setCourse("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add courses</h1>
      <div>
        <input
          placeholder="Please insert course name"
          type="text"
          name="course"
          onChange={handleChange}
          value={course}
        />
        <button className={styles.button} onClick={addCourseDisplay}>
          Add Course
        </button>
        <button className={styles.button} onClick={resetCourse}>
          Reset
        </button>
        <ViewCourse course={courseDisplay} />
      </div>
    </div>
  );
};

export default HomeworkDay3;
