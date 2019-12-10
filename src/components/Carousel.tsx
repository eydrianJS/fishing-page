import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';


export default function MyCarousel() {
    
    const [activeItemIndex, setActioveItemIndex] = useState<number>(0);
    const [children, setChildren] = useState<any[]>([]);
    
    const createChildren = (n: number) => range(n).map((i: number) => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);
    // 
    useEffect(() => {
        setChildren(createChildren(20));
    }, [])
    const changeActiveItem = (activeItemIndex: number) => setActioveItemIndex(activeItemIndex)
    return (
        <ItemsCarousel
            Placeholder configurations
            enablePlaceholder
            numberOfPlaceholderItems={5}
            minimumPlaceholderTime={1000}
            placeholderItem={<div style={{ height: 200, background: '#900' }}>Placeholder</div>}

            // Carousel configurations
            numberOfCards={3}
            gutter={12}
            showSlither={true}
            firstAndLastGutter={true}
            freeScrolling={false}

            // Active item configurations
            requestToChangeActive={changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={'center'}

            chevronWidth={24}
            rightChevron={'>'}
            leftChevron={'<'}
            outsideChevron={false}
        >
            {children}
        </ItemsCarousel>
    )
}