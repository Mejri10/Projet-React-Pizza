// import Item1 from '../../images/item1.jpg'
// import Item2 from '../../images/item2.jpg'
// import Item3 from '../../images/item3.jpg'
// import Item4 from '../../images/item4.jpg'
// import Item5 from '../../images/item5.jpg'
// import Item6 from '../../images/item6.jpg'


import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    productData: [
        {
            id: 1,
            img: product1,
            alt: 'Pizza',
            name: 'Supreme Pizza',
            desc:
                'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
            price: 20,
            button: 'Add to Cart'
        },
        {
            id: 2,
            img: product2,
            alt: 'Pizza',
            name: 'Hawaiian Paradise',
            desc:
                ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
            price: 15,
            button: 'Add to Cart'
        },
        {
            id: 3,
            img: product3,
            alt: 'Pizza',
            name: 'Veggie Overload',
            desc:
                ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
            price: 13,
            button: 'Add to Cart'
        }
    ],
    productDataTwo: [
        { id: 4, img: sweet2, alt: 'Donuts', name: 'Doughlicious', desc: 'Belgian chocolate glazed donuts covered in icing with sprinkles on top', price: 5, button: 'Add to Cart' },
        { id: 5, img: sweet3, alt: 'Ice Cream', name: 'Caramel Wonder', desc: 'Vanilla ice cream covered with caramel and chocolate glaze topped with a coco stick', price: 7, button: 'Add to Cart' },
        { id: 6, img: sweet1, alt: 'Brownie', name: 'Brownie Bunch', desc: 'Double fudge brownie squares topped with white chocolate pieces and macadamia nuts', price: 5, button: 'Add to Cart' }
    ],
    // items: [
    //     { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
    //     { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
    //     { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
    //     { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
    //     { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
    //     { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
    // ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {
    debugger;
    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem;
        if (action.id <= 3) {
            addedItem = state.productData.find(item => item.id === action.id);
        } else {
            addedItem = state.productDataTwo.find(item => item.id === action.id);
        }

        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        debugger;
        // let addedItem = state.items.find(item=> item.id === action.id)
        let addedItem;
        if (action.id <= 3) {
            addedItem = state.productData.find(item => item.id === action.id);
        } else {
            addedItem = state.productDataTwo.find(item => item.id === action.id);
        }

          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        debugger;
        // let addedItem = state.items.find(item=> item.id === action.id) 
        let addedItem;
        if (action.id <= 3) {
            addedItem = state.productData.find(item => item.id === action.id);
        } else {
            addedItem = state.productDataTwo.find(item => item.id === action.id);
        }

        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    else{
        return state
        }
}


export default cartReducer;