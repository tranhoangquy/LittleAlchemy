import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './iconTypes';
import '../App.css';

const style = {
    padding: "0px",
    height: "54px",
    display: "flex",
    cursor: 'pointer',
    position: 'absolute'
};

export const Icon = ({ id, left, top, children, src, name, key }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id, left, top, src, name, key, type: ItemTypes.ICON },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div ref={drag} style={{ ...style, left, top }} className="element">
            {children}
        </div>
    );
};
