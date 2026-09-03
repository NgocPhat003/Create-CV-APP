import { useState } from  "react";
import FormGeneralInformation from "./FormGeneralInformation.jsx";

const GeneralInformation = ({ changePage, generalData, setGeneralData }) => {
    const [draft, setDraft] = useState(generalData);
    const [errors, setErrors] = useState({
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
    });

    const validators = {
        lastName: (v) => (v.trim() ? "" : "Required field"),
        firstName: (v) => (v.trim() ? "" : "Required field"),
        email: (v) => {
            if (!v.trim()) return "Required field";
            if (!/^[A-za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,3}$/.test(v))
                return "Incorrect email";
            return "";
        },
        phone: (v) => {
        if (!v.trim()) return "Required field";
        if (!/^\d{3}-\d{3}-\d{4}$/.test(v)) return "Incorrect phone number";
        return "";
        },
    };

    const validateFields = (field, value) => {
        const errorMsg = validators[field](value);
        setErrors((prev) => ({...prev, [field]: errorMsg}));
        return errorMsg;
    };

    const handleChangePage = (index) => {
        changePage(index);
    };

    const validateAll = () => {
        const newErrors = {};
        Object.keys(validators).forEach((field) => {
            newErrors[field] = validators[field](draft[field]);
        });
        setErrors(newErrors);
        return Object.values(newErrors).every((err) => !err);
    };

    const handleSaveData = () => {
        if (validateAll()) {
            setGeneralData(draft);
        }
    };
    
    return (
        <section className="general-information">
            <h2 className="h2-information-page">General Information</h2>
            
            <p className="information-description">
                Fill fields with your name and contact information
            </p>

            <div className="form-block">
                <FormGeneralInformation
                    generalData={draft}
                    setGeneralData={setDraft}
                    errors={errors}
                    validateFields={validateFields}
                />

                <div className="btn-block">
                    <button className="form-btn" onClick={handleSaveData}>
                        Save
                    </button>
                    <button className="form-btn" onClick={() => handleChangePage(1)}>
                        Next &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GeneralInformation;