import React, { useState } from 'react';

const ColorPalette = () => {
    const [selectedColor, setSelectedColor] = useState('#ffffff'); // default color
    const [colors, setColors] = useState([
        { id: 1, color: '#f44336', label: 'Red' },
        { id: 2, color: '#8bc34a', label: 'Green' },
        { id: 3, color: '#2196f3', label: 'Blue' },
        // Add more colors here
    ]);

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="color-palette-container">
            {colors.map((color) => (
                <button
                    key={color.id}
                    className="color-palette-btn"
                    style={{ backgroundColor: color.color }}
                    onClick={() => handleColorChange(color.color)}
                >
                    {color.label}
                </button>
            ))}
        </div>
    );
};

export default ColorPalette;
