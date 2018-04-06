import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {

    // console.log('action type: ', action.type);
    switch (action.type){

        case FETCH_WEATHER:

            // console.log('fetch_weather: ', action.payload.data);
            return [ action.payload.data, ...state ];
            // return state.concat([action.payload.data]);

    }//end switch

    return state;
}