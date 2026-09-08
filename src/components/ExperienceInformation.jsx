import { useState } from "react";
import FormExperienceInformation from "./FormExperienceInformation.jsx";

const ExperienceInformation = ({
  changePage,
  experienceData,
  setExperienceData,
}) => {
  const [draft, setDraft] = useState(experienceData);
  const emptyErrors = () => ({
    company: "",
    position: "",
    location: "",
    dateStart: "",
    dateEnd: "",
    responsibilities: "",
  });
  const [errors, setErrors] = useState(() =>
    Object.fromEntries(draft.map((form) => [form.id, emptyErrors()])),
  );

  const validators = {
    company: (v) => (v.trim() ? "" : "Required field"),
    position: (v) => (v.trim() ? "" : "Required field"),
    location: (v) => (v.trim() ? "" : "Required field"),
    dateStart: (v, data) => {
      if (!v.trim()) return "Required field";
      if (data.dateEnd && v > data.dateEnd) {
        return "Start date must be before end date";
      }
      return "";
    },
    dateEnd: (v, data) => {
      if (data.dateEnd && data.dateStart && v < data.dateStart) {
        return "End date must be after start date";
      }
      return "";
    },
    responsibilities: (v) => (v.trim() ? "" : "Required field"),
  };

  const handleAddForm = () => {
    const newForm = {
      id: crypto.randomUUID(),
      data: {
        company: "",
        position: "",
        location: "",
        dateStart: "",
        dateEnd: "",
        responsibilities: "",
      },
    };
    setDraft((prev) => [...prev, newForm]);
    setErrors((prev) => ({ ...prev, [newForm.id]: emptyErrors() }));
  };

  const handleRemoveForm = (id) => {
    setDraft((prev) => prev.filter((form) => form.id !== id));
    setErrors((prev) => {
      const { [id]: removed, ...rest } = prev;
      return rest;
    });
  };

  const handleChangePage = (index) => {
    changePage(index);
  };

  const handleUpdateData = (id, newData) => {
    setDraft((prev) =>
      prev.map((form) => (form.id === id ? { ...form, data: newData } : form)),
    );
  };

  const validateField = (id, field, value, data) => {
    const errorMsg = validators[field](value, data);
    setErrors((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: errorMsg },
    }));
    return errorMsg;
  };

  const validateAll = () => {
    const newErrors = {};
    let isValid = true;

    draft.forEach((form) => {
      const formErrors = {};
      Object.keys(validators).forEach((field) => {
        const errorMsg = validators[field](form.data[field], form.data);
        formErrors[field] = errorMsg;
        if (errorMsg) isValid = false;
      });
      newErrors[form.id] = formErrors;
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSaveData = () => {
    if (validateAll()) {
      setExperienceData(draft);
    }
  };

  return (
    <section className="experience-information">
      <h2 className="h2-information-page">Experience</h2>

      <p className="information-description">
        Fill fields about your work experience information
      </p>

      <div className="forms-block">
        {draft.map((form, index) => (
          <div key={form.id}>
            <FormExperienceInformation
              index={index}
              idForm={form.id}
              data={form.data}
              updateData={handleUpdateData}
              {...(draft.length > 1 ? { deleteForm: handleRemoveForm } : {})}
              errors={errors[form.id] ?? emptyErrors()}
              validateField={validateField}
            />
          </div>
        ))}

        <div className="btn-block">
          <button className="form-btn" onClick={() => handleChangePage(1)}>
            &larr; Previous
          </button>
          <button className="form-btn" onClick={handleAddForm}>
            Add experience
          </button>
          <button className="form-btn" onClick={handleSaveData}>
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceInformation;