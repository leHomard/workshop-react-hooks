import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    width: 100%;
    height: 150px;
    border-bottom: 2px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    margin-bottom: 3em;
`;

const SearchBar = styled.input`
    border-radius: 0.5em;
    width: 300px;
    margin-right: 2em;
    padding: 0.3em;
`;

const HeaderActionsContainer = styled.div`
    position: relative;
    bottom: -120px;
`;

const Header = ({ onChange, onSelect }) => (
    <HeaderContainer>
        <HeaderActionsContainer>
            <SearchBar onChange={(v) => onChange(v.target.value)} placeholder="rechercher votre article..." type="text" />
            <select onChange={(v) => onSelect(v.target.value)}>
                <option value={4}>Afficher 4 articles</option>
                <option value={8}>Afficher 8 articles</option>
                <option value={100}>Afficher tous les articles</option>
            </select>
        </HeaderActionsContainer>
    </HeaderContainer>
)

export default Header;