
import React from 'react';

const ButtonComponent = ({children}) => {
    return (
      <button className=" btn btn-primary bg-gradient-to-l from-primary to-secondary text-white text-sm">
        {children}{" "}
      </button>
    );
};

export default ButtonComponent;