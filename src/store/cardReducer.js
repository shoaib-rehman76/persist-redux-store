import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import { successToast } from "../helpers/toasterMessages/Toaster";
const initialState = {
    cardData: []
}

const cardSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        addCard: (state, action) => {
            state.cardData = [...state.cardData, { cardText: action.payload, status: 'card-1', id: uuidv4() }]
        },

        editCard: (state, action) => {
            console.log(action.payload);
            const findCard = state.cardData.find((item) => item.id === action.payload.id)
            console.log(findCard, 'findcard');
            if (findCard) {
                findCard.cardText = action.payload.text
            }
        },

        deleteCard: (state, action) => {
            state.cardData = state.cardData.filter((item) => item.id !== action.payload)
            successToast('card deleted successfully')
        },

        moveToNextCard: (state, action) => {
            console.log(action);
            const findCard = state.cardData.find((item) => item.id === action.payload.id)
            if (findCard) {
                findCard.status = action.payload.cardStatus
            }
        },

        moveToPrevCard: (state, action) => {
            console.log(action);
            const findCard = state.cardData.find((item) => item.id === action.payload.id)
            if (findCard) {
                findCard.status = action.payload.cardStatus
            }
        }
    }
})

export const { addCard, deleteCard, moveToNextCard, moveToPrevCard, editCard } = cardSlice.actions

export default cardSlice.reducer