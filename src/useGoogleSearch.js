import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "4987d4b55ab42785b" // From: https://cse.google.com/cse/setup/basic?cx=4987d4b55ab42785b

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {

    }, [term])
}

export default useGoogleSearch