export const initialState = {
    basket: [],
    favorites: [],
    user: null,
};

// Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

export const isLiked = (favorites, id) => {
    let index = favorites.findIndex((favorite) => favorite.id === id)
    if (index < 0) {
        return false;
    } else {
        return true;
    }
}

let index;
let newFavorites;


const reducer = (state, action) => {

    // console.log("reducer state >> ", state);
    // console.log("reducer action >> ", action.type);

    switch(action.type) {
        case "ADD_TO_BASKET":
            // console.log("basket >> ", state.basket)
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: [],
            };

        case "REMOVE_FROM_BASKET":
            index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            // console.log("newBasket >> ",newBasket);
            // console.log("action.id >> ",action.id);


            if (index >= 0) {
                newBasket.splice(index,1);
            } else {
                console.warn(`Can't remove product (id: ${action.id} as it's not in the basket!`); 
            }

            return {
                ...state,
                basket: newBasket
            }

        case "ADD_TO_FAV":
            index = state.favorites.findIndex(
                (favoritesItem) => (
                    favoritesItem.id === action.id)
            );
            console.log("action.id >> ", action.id)
            console.log("index >> ", index);
            console.log("favorites >> ", state.favorites)
            newFavorites = [...state.favorites];

            if (index >= 0) {
                console.warn(`No need to add product (id: ${action.id} as it's already in the favorites list`);
                return {
                    ...state,
                    favorites: newFavorites
                };
            } else {
                return {
                    ...state,
                    favorites: [...state.favorites, action.item],
                };
            }
            

        case "EMPTY_FAV":
            return {
                ...state,
                favorites: [],
            };

        case "REMOVE_FROM_FAV":
            index = state.favorites.findIndex(
                (favoritesItem) => favoritesItem.id === action.id
            );
            newFavorites = [...state.favorites];

            if (index >= 0) {
                newFavorites.splice(index,1);
            } else {
                console.warn(`Can't remove product (id: ${action.id} as it's not in the basket!`); 
            }

            return {
                ...state,
                favorites: newFavorites
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;