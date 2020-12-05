import React from 'react';
import {Header, Education, Project, Footer, Internship} from './utils';
import {education_data, project_data, others_data, social_data} from './data';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header social_data= {social_data} />
      <Education edu_data= {education_data} />
      <Project proj_data= {project_data} />
      <Internship />
      <Footer others_data= {others_data} social_data= {social_data} />
    </div>
  );
}

export default App;
