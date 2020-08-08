import React, { useState } from 'react';

//pass in props {value} 
const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }
    //create a function that maps items array
    const renderedItems = items.map((item, index) => {
        // if index is equal to active index if is assign active otherwise empty string
        const active = index === activeIndex ? 'active': '';

        return( 
        <React.Fragment key ={item.title}>
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}>
                <i className='dropdown icon'></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        )
    });
    return <div className='ui styled accordion'>
    {/* RETURN the {function} with no parenthesis (DO NOT CALL FUNCTION) */}
        {renderedItems}
    </div>
}
export default Accordion;