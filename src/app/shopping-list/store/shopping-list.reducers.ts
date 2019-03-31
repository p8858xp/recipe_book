import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from "../../shared/ingredient.model";

export interface State{
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}
const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function shoppingListReducer(state=initialState, action: ShoppingListActions.ShoppingListActions){
    switch (action.type){
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            // lets get the one ingredient first
            const ingredient = state.ingredients[state.editedIngredientIndex];
            // this is a js object where I copy all the properties of the old ingredient to update it in an immutable way
            const updatedIngredient = {
                ...ingredient, 
                ...action.payload.ingredient // here I want to pass all the changed properties of the new ingredient
                // and this will override all the properties which were part of the old ingredient
            }
            // now add this to the array
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            // you want to return an updated state by using the old state and copying all its properties in an immutable way 
            // and then overriding the one specific ingredients
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex,1);
            return {
                ...state, //holds the old state
                ingredients: oldIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return{
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            }
        case ShoppingListActions.STOP_EDIT:
        return{
            ...state,
            editedIngredient: null,
            editedIngredientIndex: -1
        }
        default:
            return state;
    }
}