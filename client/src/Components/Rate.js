import React from 'react';

function Rate({rate}){
    const range = [1, 2, 3, 4, 5];

    return (
        <div>
            {range.map((rangeElement) => (
                rangeElement <= rate ? (
                    <span key={rangeElement.toString()}>⭐</span>
                ): null
            ))}
        </div>
    );
};

export default Rate;