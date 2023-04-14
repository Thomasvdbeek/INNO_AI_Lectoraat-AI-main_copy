import React from "react";
import '../assets/css/font-sizes.css'
import DashboardInput from "../components/Dashboard/DashboardInput";
import DashboardInfoCard from "../components/InformationCards/DashboardInfoCard";

const humanBodyFeatures = {
    "BodyMassIndex": "kg/m²",
    "ASAScore": "N/A",
    "RespiratoryRate": "breaths/min",
    "OxygenSaturation": "%",
    "HeartRate": "bpm",
    "BloodPressure": "mmHg",
    "BodyTemperature": "°C",
    "PainLevel": "NRS",
    "MetabolicRate": "kcal/day",
    "PhysicalActivity": "MET"
};

const cardInfo = {
    patientId: 123,
    modelPrediction: "COVID-19",
    certaintyScore: 0.9
};

function Dashboard() {

    return (
        <>
            <div className="content">
                <DashboardInfoCard cardInformation={cardInfo}/>

                <DashboardInput features={humanBodyFeatures}/>
            </div>
        </>
    );
}

export default Dashboard;
