import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import photo0 from '../../public/images/photo0.png'
import photo1 from '../../public/images/photo1.png'
import photo2 from '../../public/images/photo2.png'
import { useBodyStyles } from '../styles/styles';


export default function MyCarousel(props) {
    const classes = useBodyStyles(props.theme)
    
    const [activeItemIndex, setActioveItemIndex] = useState<number>(0);
    const [children, setChildren] = useState<any[]>([]);
    
    const createChildren = (n: number) => range(n).map((i: number) => <img src={`../../public/images/photo${i}.png`} style={{width: '200px'}}  className={classes.paper}/>);
    // 
    useEffect(() => {
        setChildren(createChildren(3));
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