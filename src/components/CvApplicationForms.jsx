import "../styles/cv.css";
import EducationInformation from "./EducationInformation.jsx";
import ExperienceInformation from "./ExperienceInformation.jsx";
import GeneralInformation from "./GeneralInformation.jsx";

const CvApplicationForms = ({
  activeIndex,
  changePage,
  generalData,
  setGeneralData,
  educationData,
  setEducationData,
  experienceData,
  setExperienceData,
}) => {
  return (
    <section className="cv-app-forms">
      {activeIndex === 0 ? (
        <GeneralInformation
          changePage={changePage}
          generalData={generalData}
          setGeneralData={setGeneralData}
        />
      ) : activeIndex === 1 ? (
        <EducationInformation
          changePage={changePage}
          educationData={educationData}
          setEducationData={setEducationData}
        />
      ) : activeIndex === 2 ? (
        <ExperienceInformation
          changePage={changePage}
          experienceData={experienceData}
          setExperienceData={setExperienceData}
        />
      ) : null}
    </section>
  );
};

export default CvApplicationForms;