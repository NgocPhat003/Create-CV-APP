import { useState } from "react";
import "../styles/cv.css";
import CvApplicationForms from "./CvApplicationForms.jsx";
import CvApplicationNavBar from "./CvApplicationNavBar.jsx";

const CvApplication = ({
  generalData,
  setGeneralData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="cv-app">
      <CvApplicationNavBar index={activeIndex} onSend={setActiveIndex} />
      <CvApplicationForms
        activeIndex={activeIndex}
        changePage={setActiveIndex}
        generalData={generalData}
        setGeneralData={setGeneralData}
        educationData={educationData}
        setEducationData={setEducationData}
        experienceData={experienceData}
        setExperienceData={setExperienceData}
      />
    </section>
  );
};

export default CvApplication;