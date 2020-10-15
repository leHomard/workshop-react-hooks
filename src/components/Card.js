import React, { memo } from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #ddd;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
    padding: 0.5em;
`;

const ItemImage = styled.img`
    width: 240px;
    heigth: 240px;
`;

const Card = ({ item, onClick }) => {
    return (
        <CardContainer>
            <ItemImage src={item.url} onClick={() => onClick(item.id)} />
            <h3>{item.brand}</h3>
        </CardContainer>
    )

}
export default memo(Card);