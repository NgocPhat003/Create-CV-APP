import { FormControlLabel, Switch } from "@mui/material";
import "./App.css";
import CvApplication from "./components/CvApplication.jsx";
import CvPreview from "./components/CvPreview.jsx";
import { useState } from "react";

function App() {
  const [showPreview, setShowPreview] = useState(false);
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [educationData, setEducationData] = useState([
    {
      id: crypto.randomUUID(),
      data: {
        place: "",
        degree: "",
        dateStart: "",
        dateEnd: "",
      },
    },
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      id: crypto.randomUUID(),
      data: {
         company: "",
        position: "",
        location: "",
        dateStart: "",
        dateEnd: "",
        responsibilities: "",
      },
    },
  ]);

  const handleShowPreview = () => {
    setShowPreview(!showPreview);
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="h1-app">Resume Builder</h1>

        <FormControlLabel
          control={
            <Switch
              checked={showPreview}
              onClick={handleShowPreview}
              color="warning"
            />
          }
          label={showPreview ? "Hide preview" : "Show preview"}
        />
      </div>

      <div className={showPreview ? "cv-wrapper-2" : "cv-wrapper-1"}>
        <CvApplication
          generalData={generalData}
          setGeneralData={setGeneralData}
          educationData={educationData}
          setEducationData={setEducationData}
          experienceData={experienceData}
          setExperienceData={setExperienceData}
        />
        <CvPreview
          generalData={generalData}
          educationData={educationData}
          experienceData={experienceData}
          showPreview={showPreview}
        />
      </div>
    </div>
  );
}

export default App
