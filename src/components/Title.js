import React from 'react';

export default function Title({ptitle}) {
    return (
        <div className="row">
            {<div className="col-10 mx-auto my-2 text-center">
                <h1 className="text-capitalize title-color">
                    {ptitle}
                </h1>
            </div>}
        </div>
    )
}