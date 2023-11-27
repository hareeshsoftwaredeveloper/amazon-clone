export const initialState = {
    cart: [],
    user:null
} 

export const getCartTotal = (cart) => (
    cart?.reduce((amount, item)=>amount+parseFloat(item.price || 0), 0)
)


const reducer=(state, action) =>{
    switch (action.type) {
        
        case "Set_User":
            return {
                ...state,
                user:action.user
            }

        case "Add_To_Cart":
            return {...state, cart:[...state.cart, action.item]}
        
        case "Remove_From_Cart":
            let newCart = [...state.cart]
            const index=state.cart.findIndex((cartItem)=>cartItem.id===action.id)
            if (index >= 0) {
                newCart.splice(index, 1)
            }
            else {
                console.warn("Can't remove product ")
            }

            return {...state, cart:newCart}
             
        default:
            return state
    }
}

export default reducer 