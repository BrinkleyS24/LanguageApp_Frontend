import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Fetch data from backend when the component mounts
    axios.get('http://localhost:5000/api/lessons')
      .then(response => {
        // Set the lessons state with the data from the backend
        setLessons(response.data);
      })
      .catch(error => {
        console.error('Error fetching lessons:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lessons</h2>
      <ul>
        {lessons.map(lesson => (
          <li key={lesson.id}>{lesson.title} - Duration: {lesson.duration}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonList;
