import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';

const CloseButton = () => {
    const { handleClick } = useStateContext();
    return (
        <button
            type="button"
            onClick={() => handleClick(false)}
            style={{
                color: 'rgb(153, 171, 180)',
                borderRadius: '50%',
            }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        >
            <MdOutlineCancel />
        </button>
    );
};

export default CloseButton;
