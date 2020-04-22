// code that combines all the other state together
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'; //
// SessionStorage is a different folder
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


// defining a new persist config: just the JSON obj the reps the possbile configs for redux persist to use
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // the only reducer we want to persist is this cart because user is being persisted by firebase for now
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

//modified version of our route reduce with this persistConfig on top b/c of the persistReducer function from redux-persist: line 3:
export default persistReducer(persistConfig, rootReducer);