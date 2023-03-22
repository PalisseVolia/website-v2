import { useState } from 'react';

export default function SkillBox() {
    const [isVisible, setIsVisible] = useState(true);

    const handleMouseEnter = () => {
        setIsVisible(false);
    };

    const handleMouseLeave = () => {
        setIsVisible(true);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isVisible && (
                <div>
                    <p>Hello World</p>
                </div>
            )}
        </div>
    );
}