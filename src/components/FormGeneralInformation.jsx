import IconModule from '@mdi/react';
import { mdiAccount, mdiEmailOutline, mdiPhone } from '@mdi/js';

cosnt FormGeneralInformation = ({generalData, setGeneralData
    errors, validateFields }) => {
        const Icon = IconModule.default;

        cosnt handleClear = () => {
            setGeneralData({
                lastName: "",
                firstName: "",
                email: "",
                phone: ""
            });
        }

        const handleChange = (field) => (e) => {
            const value = e.target.value;
            setGeneralData(prev => ({...prev, [field]: value}));
            validateFields(field, value);
        }
    };