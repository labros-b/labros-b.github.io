import React, { useState, useEffect, useRef } from 'react';
import MainInfo from './components/main-info';
import Projects from './components/projects';
import PersonalInfo from './components/personal-info';
import './App.css';

function App() {
  const mainInfoRef = useRef();
  const personalInfoRef = useRef();
  const projectsRef = useRef();

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const scrollTo = (ref) => window.scrollTo(0, ref.current.offsetTop + 20);

  const setMainInfoRef = (ref) => mainInfoRef.current = ref;
  const setPersonalInfoRef = (ref) => personalInfoRef.current = ref;
  const setProjectsRef = (ref) => projectsRef.current = ref;

  return (
    <main className="App">
      <MainInfo
        onGetSectionRef={setMainInfoRef}
        scrollToPersonalInfo={() => scrollTo(personalInfoRef.current)}
        scrollToProjects={() => scrollTo(projectsRef.current)}
      />
      <PersonalInfo
        width={width}
        onGetSectionRef={setPersonalInfoRef}
        scrollToMainInfo={() => scrollTo(projectsRef.current)}
      />
      <Projects onGetSectionRef={setProjectsRef} />
    </main>
  );
}

export default App;
