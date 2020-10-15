import React, { useEffect, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Card from './components/Card';

const GET_ITEMS_URL = 'http://localhost:3000/items'

const CardsListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(120px, 350px));
    justify-content: center;
`;

const App = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectValue, setSelectValue] = useState(4);

  useEffect(() => {
    fetch(GET_ITEMS_URL).then(resp => resp.json()).then(data => {
      setItems(data);
    })
  }, []);

  const handleSearchItem = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleDisplayItems = (selectValue) => {
    setSelectValue(selectValue);
  };

  const onDeleteItem = useCallback(
    (id) => setItems(items => items.filter(item => item.id !== id)),
    []
  )

  const filteredItems = useMemo(
    () => items.filter(item => item.brand.toLowerCase().includes(searchTerm)),
    [searchTerm, items]
  );

  const reducedItems = filteredItems.slice(0, selectValue);
  const itemToElement = item => <Card key={item.id} item={item} onClick={onDeleteItem} />;

  return (
    <>
      <Header
        onChange={handleSearchItem}
        onSelect={handleDisplayItems}
      />
      <CardsListContainer>
        {reducedItems.map(itemToElement)}
      </CardsListContainer>
    </>
  );
}

export default App;
