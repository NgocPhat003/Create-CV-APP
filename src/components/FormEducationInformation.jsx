import { mdiDelete, mdiSchool, mdiTownHall } from "@mdi/js";
import IconModule from "@mdi/react";

const FormEducationInformation = ({ index, idForm, deleteForm, data,
    updateData, errors, validateField }) => {
        const Icon = IconModule.default;

        const handleChange = (field) => (e) => {
            const value = e.target.value;
            updateData(idForm, {...data, [field]: value});
            validateField(idForm, field, value);
        };

        const handleClear = () => {
            updateData(idForm, {
                place: "",
                degree: "",
                dateStart: "",
                dateEnd: "",
            });
        };

        return (
            <div className="form-wrapper">
                <div className="form-header">
                    <h3>Education information {index + 1} </h3>
                    {deleteForm && (
                        <div className="icon-wrapper" onClick={() => deleteForm(idForm)}>
                            <Icon size={1} path={mdiDelete} title="Delete form" />
                        </div>
                    )}
                </div>

                <div className="input-block">
                    <p className="input-title">
                        Education place name<sup>*</sup>
                    </p>
                    <div className="input-wrapper">
                        <Icon size={1} path ={mdiTownHall}/>
                        <input 
                            type="text"
                            className="form-input"
                            placeholder="HCMUS"
                            value={data.place}
                            onChange={handleChange("place")}
                        />
                    </div>
                    <p className={`input-error ${errors.place ? "" : "hidden"}`}>
                        {errors.place}
                    </p>
                </div>

                <div className="input-block">
                    <p className="input-title">
                        Education degree<sup>*</sup>
                    </p>
                    <div className="input-wrapper">
                        <Icon size={1} path ={mdiSchool}/>
                        <input 
                            type="text"
                            className="form-input"
                            placeholder="Master"
                            value={data.degree}
                            onChange={handleChange("degree")}
                        />
                    </div>
                    <p className={`input-error ${errors.degree ? "" : "hidden"}`}>
                        {errors.degree}
                    </p>
                </div>

                <div className="input-block">
                    <p className="input-title">
                        Start date<sup>*</sup>
                    </p>
                    <div className="input-wrapper">
                        <input 
                            type="month"
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
                    <p className="input-title">
                        End date<sup>*</sup>
                    </p>
                    <div className="input-wrapper">
                        <input 
                            type="month"
                            className="form-input"
                            value={data.dateEnd}
                            onChange={handleChange("dateEnd")}
                        />
                    </div>
                    <p className={`input-error ${errors.dateEnd ? "" : "hidden"}`}>
                        {errors.dateEnd}
                    </p>
                </div>

                <button className="form-btn" onClick={handleClear}>
                    Clear
                </button>
            </div>
            
        );
    };

    export default FormEducationInformation;