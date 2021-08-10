import React from 'react';

import Item from '../Item';
import ImageFilter from '../ImageFilter';
import styled from "styled-components";

const Items = styled.div`
  display: flex;
  margin: 2px;
  padding: 0.7em;
  align-items: center;
  justify-content: space-around;
  box-shadow: 4px 4px 20px 0 rgba(0,0,0,0.1);
  border-radius: 10px;
  font-size: 12px;
`;

export default (props) => {
    return (
        <Items>
            {ImageFilter(props.type)}
            <Item {... props} />
            <span>{props.date}</span>
        </Items>
    );
};