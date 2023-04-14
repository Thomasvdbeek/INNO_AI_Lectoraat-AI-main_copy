// Patient.js
import React, { useState } from 'react';
import SearchPatient from '../components/patient/SearchPatient.js';

const Patient = () => {
    const [searchValues,
        setSearchValues] = useState({
        Name: { checked: false, value: '' },
        BodyMassIndex: { checked: false, value: '' },
        ASAScore: { checked: false, value: '' },
        RespiratoryRate: { checked: false, value: '' },
        OxygenSaturation: { checked: false, value: '' },
        HeartRate: { checked: false, value: '' },
        BloodPressure: { checked: false, value: '' },
        BodyTemperature: { checked: false, value: '' },
        PainLevel: { checked: false, value: '' },
        MetabolicRate: { checked: false, value: '' },
        PhysicalActivity: { checked: false, value: '' }
    });

    const handleSearchValueChange = (event) => {
        const { name, type, value, checked } = event.target;
        setSearchValues((prevValues) => ({
            ...prevValues,
            [name]: { checked: type === 'checkbox' ? checked : prevValues[name].checked, value: type === 'text' ? value : prevValues[name].value }
        }));
    };

    const handleSearch = (e) => {
        console.log(`Searching for patient with criteria: `, searchValues);
        e.preventDefault()
    };

    return (
        <>
            <div className={"content"}>
                {searchValues && (
                    <SearchPatient
                        searchValues={searchValues}
                        handleSearchValueChange={handleSearchValueChange}
                        handleSearch={handleSearch}
                    />
                )}
            </div>
        </>
    );
};

export default Patient;
