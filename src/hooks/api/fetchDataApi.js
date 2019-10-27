// eslint-disable-next-line no-unused-vars
import React, {
useEffect,
useReducer,
} from 'react';

import axios from 'axios';

import fetchDataReducer from '../reducer/fetchDataReducer'

const endpoint = 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=16&srsearch'

// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => {
//     const results = data.query.search;
// })
// .catch(() => console.log('An error occurred'));



export default (term) => {

const [state, dispatch] = useReducer(fetchDataReducer, {
    isLoading: false,
    isError: false,
    data: [],
});

useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
    dispatch({ type: 'FETCH_INIT' });

    try {
        const result = await axios(`${endpoint}=${term}`);

        if (!didCancel) {
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data.query.search });
        }
    } catch (error) {

        if (!didCancel) {
        dispatch({ type: 'FETCH_FAILURE' });
        }
    }
    };

    fetchData();

    return () => {
    didCancel = true;
    };
}, [term]);

return [state];
};