import { mdiBriefcase, mdiCalendarMonth, mdiEmail, mdiFormatListBulleted, mdiMapMarker, mdiPhone, mdiSchool } from "@mdi/js";
import IconModule from "@mdi/react";

const CvPreview = ({generalData, educationData, 
    experienceData, showPreview}) => {
        const Icon = IconModule.default;

        const formatDate = (dateString) => {
            if(!dateString) {
                return "";
            }

            const parts = dateString.split("-").map(Number);
            const [year, month, day] = parts;
            const date = new Date(year, month - 1, day || 1);
            const options =
                parts.length === 3
                    ? {day: "numberic", month: "long", year: "numberic"}
                    : {month: "long", year: "numberic"};

            return date.toLocaleDateString("en-US", options);
        }

        return (
            (showPreview && <section className="cv-preview">
                <h2 className="h2-preview-header">Preview</h2>

                <div className="preview-main-wrapper">
                    {generalData.lastName && (
                        <div className="preview-general-info">
                            <p className="preview-fullname">
                                {generalData.firstName.toUpperCase()} {" "}
                                {generalData.lastName.toUpperCase()}
                            </p>

                            <hr className="preview-hr" />

                            <div className="preview-general-wrapper">
                                <Icon size = {1.25} path = {mdiEmail} />
                                <p>Email: {generalData.email}</p>
                            </div>

                            <div className="preview-general-wrapper">
                                <Icon siz = {1.25} path = {mdiPhone} />
                                <p>Phone: +84{generalData.phone} </p>
                            </div>
                        </div>
                    )}

                    {educationData[0].data.place && (
                        <div className="preview-education-info">
                            <p className="preview-section-title">EDUCATION</p>

                            <div className="preview-info-box">
                                
                            </div>
                        </div>
                    )}
                </div>
            </section>)
        )
        
    };