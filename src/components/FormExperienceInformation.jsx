import IconModule from "@mdi/react";
import "../styles/forms.css";
import { mdiAccountTie, mdiBriefcase, mdiDelete, mdiMapMarker } from "@mdi/js";

const FormExperienceInformation = ({
    index,
    idForm,
    deleteForm,
    data,
    updateData,
    errors,
    validateField,
}) => {
    const Icon = IconModule.default;

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        updateData(idForm, {...data, [field]: value});
        validateField(idForm, field, value);
    };

    const handleClearForm = () => {
        updateData(idForm, {
        company: "",
        position: "",
        location: "",
        dateStart: "",
        dateEnd: "",
        responsibilities: "",
        });
    };

     return (
        <div className="form-wrapper">
        <div className="form-header">
            <h3>Experience information {index + 1}</h3>
            {deleteForm && (
            <div className="icon-wrapper" onClick={() => deleteForm(idForm)}>
                <Icon size={1} path={mdiDelete} title="Delete form" />
            </div>
            )}
        </div>

        <div className="input-block">
            <p className="input-title">
            Company name<sup>*</sup>
            </p>
            <div className="input-wrapper">
            <Icon size={1} path={mdiBriefcase} />
            <input
                type="text"
                className="form-input"
                placeholder="Microsoft"
                value={data.company}
                onChange={handleChange("company")}
            />
            </div>
            <p className={`input-error ${errors.company ? "" : "hidden"}`}>
            {errors.company}
            </p>
        </div>

        <div className="input-block">
            <p className="input-title">
            Position title<sup>*</sup>
            </p>
            <div className="input-wrapper">
            <Icon size={1} path={mdiAccountTie} />
            <input
                type="text"
                className="form-input"
                placeholder="Software Engineer"
                value={data.position}
                onChange={handleChange("position")}
            />
            </div>
            <p className={`input-error ${errors.position ? "" : "hidden"}`}>
            {errors.position}
            </p>
        </div>

        <div className="input-block">
            <p className="input-title">
            Location<sup>*</sup>
            </p>
            <div className="input-wrapper">
            <Icon size={1} path={mdiMapMarker} />
            <input
                type="text"
                className="form-input"
                placeholder="1 Microsoft Way, Redmond, WA 98052, USA"
                value={data.location}
                onChange={handleChange("location")}
            />
            </div>
            <p className={`input-error ${errors.location ? "" : "hidden"}`}>
            {errors.location}
            </p>
        </div>

        <div className="input-block">
            <p className="input-title">
            Date start<sup>*</sup>
            </p>
            <div className="input-wrapper">
            <input
                type="date"
                className="form-input"
                value={data.dateStart}
                onChange={handleChange("dateStart")}
            />
            </div>
            <p className={`input-error ${errors.dateStart ? "" : "hidden"}`}>
            {errors.dateStart}
            </p>
        </div>

        <div className="input-block">
            <p className="input-title">Date end (optional)</p>
            <div className="input-wrapper">
            <input
                type="date"
                id={`input-date-end-${index + 1}`}
                className="form-input"
                value={data.dateEnd}
                onChange={handleChange("dateEnd")}
            />
            </div>
            <p className="information-description" style={{ fontSize: "12px", padding: 0, textAlign: "left" }}>
            Leave blank, if this is your current position
            </p>
            <p className={`input-error ${errors.dateEnd ? "" : "hidden"}`}>
            {errors.dateEnd}
            </p>
        </div>

        <div className="input-block">
            <p className="input-title">
            Main responsibilities<sup>*</sup>
            </p>
            <div className="input-wrapper">
            <textarea
                id={`text-responsibilities-${index + 1}`}
                className="form-input-textarea"
                value={data.responsibilities}
                onChange={handleChange("responsibilities")}
            />
            </div>
            <p className={`input-error ${errors.responsibilities ? "" : "hidden"}`}>
            {errors.responsibilities}
            </p>
        </div>

        <button className="form-btn" onClick={handleClearForm}>
            Clear
        </button>
        </div>
    );
};

export default FormExperienceInformation;
