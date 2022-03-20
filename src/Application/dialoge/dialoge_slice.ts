import { createSlice } from "@reduxjs/toolkit";


import {
    DeletePharmacy,
    getPhamarcys,
    SavePharmacyDetails,
    updatePharmacydetails,
} from "./dialog_extreducers";

const initialInputfields: InputFields = {
    pharmacyName: "",
    phone: "",
    fax: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    id: "",
};

const initialState: DialogState = {
    fromErrors: {
        phone: "",
        fax: "",
        zip: "",
    },
    isEditing: false,
    cleartext: "",
    error: "",
    PharmacyList: [],
    displayPharmacyList: [],
    currentInputFields: initialInputfields,
};

interface FormErrors {
    phone: string;
    fax: string;
    zip: string;
}

interface DialogState {
    isEditing: boolean;
    cleartext: string;
    error: any;
    fromErrors: FormErrors;
    PharmacyList: InputFields[];
    currentInputFields: InputFields;
    displayPharmacyList: InputFields[];
}

interface InputFields {
    pharmacyName: string;
    phone: string;
    fax: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    id: string;
}

export const dialogSlice = createSlice({
    name: "dialog",
    initialState: initialState,
    reducers: {
        editClicked(
            state,
            event: {
                payload: {
                    data: InputFields;
                };
            }
        ) {
            state.isEditing = true;
            state.currentInputFields = event.payload.data;
        },
        formData(
            state,
            event: {
                payload: {
                    data: InputFields;
                };
            }
        ) {
           
            state.error = "";
            state.currentInputFields = event.payload.data;
            state.fromErrors = {
                phone: "",
                fax: "",
                zip: "",
            }
        },
        filter(
            state,
            event: {
                payload: {
                    value: string;
                };
            }
        ) {
            state.cleartext = event.payload.value;
            state.displayPharmacyList = state.PharmacyList.filter((pharmacy) => {
                if (
                    pharmacy.pharmacyName
                        .toLowerCase()
                        .startsWith(event.payload.value.toLowerCase())
                ) {
                    return pharmacy;
                }
            });
        },
        clearfilter(state) {
            state.cleartext = "";
            state.displayPharmacyList = state.PharmacyList;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(SavePharmacyDetails.fulfilled, (state) => { })
            .addCase(SavePharmacyDetails.rejected, (state, action) => {
                const data = action.payload as {
                    errors: {
                        message: string[];
                    };
                    title: string;
                    status: number;
                };
                if (data.title === "Invalid Data") {
                    state.fromErrors.fax = data.errors.message[0];
                    state.fromErrors.phone = data.errors.message[1];
                    state.fromErrors.zip = data.errors.message[2];
                } else {
                    state.error = data.errors.message[0];
                }

            })
            .addCase(updatePharmacydetails.fulfilled, (state) => {
                state.isEditing = false;
            })
            .addCase(updatePharmacydetails.rejected, (state,action) => {
                const data = action.payload as {
                    errors: {
                        message: string[];
                    };
                    title: string;
                    status: number;
                };
                if (data.title === "Invalid Data") {
                    state.fromErrors.fax = data.errors.message[0];
                    state.fromErrors.phone = data.errors.message[1];
                    state.fromErrors.zip = data.errors.message[2];
                } else {
                    state.error = data.errors.message[0];
                }
            })
            .addCase(getPhamarcys.fulfilled, (state, action) => {
                state.cleartext = "";
                state.PharmacyList = action.payload?.data;
                state.displayPharmacyList = action.payload?.data;
            })
            .addCase(getPhamarcys.rejected, (state, payload) => { })
            .addCase(DeletePharmacy.fulfilled, (state) => { })
            .addCase(DeletePharmacy.rejected, (state) => { });
    },
});

export const dialogActions = dialogSlice.actions;

// pharmacyNameChanged(
//     state,
//     event: {
//         payload: { value: string };
//     }
// ) {
//     state.currentInputFields.pharmacyName = event.payload.value
// },
// phoneChanged(
//     state,
//     event: {
//         payload: { value: string };
//     }
// ) {
//     state.currentInputFields.phone = event.payload.value
// },
// faxChanged(
//     state,
//     event: {
//         payload: { value: string };
//     }
// ) {
//     state.currentInputFields.fax = event.payload.value
// },
// streetChanged(
//     state,
//     event: {
//         payload: { value: string };
//     }
// ) {
//     state.currentInputFields.street = event.payload.value
// },
// cityChanged(
//     state,
//     event: {
//         payload: { value: string };
//     }
// ) {
//     state.currentInputFields.city = event.payload.value
// },
// stateChanged(
//     state,
//     event: {
//         payload: { value: string };
//     }
// ) {
//     state.currentInputFields.state = event.payload.value
// },
// zipChanged(
//     state,
//     event: {
//         payload: { value: string };
//     }
// ) {
//     state.currentInputFields.zip = event.payload.value
// },
