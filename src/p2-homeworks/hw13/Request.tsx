import React from 'react';


export const Request = (props: RequestType) => {
    return (
        <div>
            <h3>{props.requestMassage}</h3>
        </div>
    );
};

type RequestType = {
    requestMassage: string
}

