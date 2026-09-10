import React, { useState } from 'react';

function Pagenation() {
    const [page, setpage] = useState([1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10
    ]);
    const [count, setcount] = useState(1);

    function handleNext() {
        if (count < page.length) {
            return setcount((prev) => prev + 1);
        }
        if (count => page.length) {
            setcount(count);
        }
    }

    function handlePrev() {
        console.log(count);
        if (count > 1) {
            setcount((prev) => count - 1);            
        }
        else {
            setcount(1)
        }
    }

    return (
        <>
            <button className='btn btn-success me-3' onClick={() => handlePrev()}><i className=' bi-arrow-left'></i></button>

            <span>{`${count} of ${page.length}`}</span>

            <button className='btn btn-success ms-3' onClick={() => handleNext()}><i className=' bi-arrow-right'></i></button>
        </>
    )
}

export default Pagenation;