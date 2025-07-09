import React, { useState } from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  width: 100%;
`;

const TabButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  border-bottom: 2px solid #ccc;
`;

const TabButton = styled.button`
  text-align: center;
  padding: 10px 20px;
  border: none;
  background-color: ${props => (props.active ? '#fff' : 'transparent')};
  cursor: pointer;
  font-size: 16px;
  border-bottom: ${props => (props.active ? '2px solid #1a3c5a' : 'none')};
  margin-bottom: -2px;
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    border-bottom: 2px solid #1a3c5a;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  background-color: transparent;
  color: #000;
`;

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContainer>
      <TabButtons>
        {items.map((item, index) => (
          <TabButton
            key={index}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </TabButton>
        ))}
      </TabButtons>
      <TabContent>
        {items[activeTab].content}
      </TabContent>
    </TabContainer>
  );
};

export default Tabs;
