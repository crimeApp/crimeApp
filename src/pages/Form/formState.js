import { createContext } from 'react';

const initialContext = {
    formData: {
        type: "",
        hour: "",
        date: "",
        place_description: "",
        accompaniment: "",
        stolen_cash: "",
        stolen_items: "",
        victim_name: "",
        victim_dni: "",
        victim_gender: "",
        victim_age: "",
        victim_height: "",
        victim_clothing: "",
        victim_pyshical: "",
        thief_profile: "",
        thief_age: "",
        thief_height: "",
        thief_clothing: "",
        thief_physical: "",
        thief_complaint: false,
        thief_arrested: false,
    },
    isComplete: false,
};

const formContext = createContext({ ...initialContext });

export default formContext;