import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Path = styled.path`
  transition-duration: 0.2s;
`;

const Loading = () => {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState([false, false, false, false, false, false, false])
  useEffect(() => {
    if (index === 8) {
      setTimeout(() => { setIndex(0); }, 150);
      return;
    }
  
    setTimeout(() => {
      const newList = [...list];
      newList[index + 1] = !list[index + 1];

      setList(newList);
      setIndex(index + 1);
    }, 150);
  }, [index]);

  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <ellipse cx="79.9989" cy="79.998" rx="50.5077" ry="50.5077" fill="#FFFFFF" />
        <Path d="M79.9983 -0.812988L93.1206 21.9155H66.876L79.9983 -0.812988Z" fill={list[1] ? '#2BC2E0' : '#FFFFFF'} />
        <Path d="M137.141 22.8575L111.791 29.6501L130.349 48.2078L137.141 22.8575Z" fill={list[2] ? '#2BC2E0' : '#FFFFFF'} />
        <Path d="M160.81 79.9991L138.082 66.8768V93.1213L160.81 79.9991Z" fill={list[3] ? '#2BC2E0' : '#FFFFFF'} />
        <Path d="M137.142 137.146L130.349 111.796L111.791 130.353L137.142 137.146Z" fill={list[4] ? '#2BC2E0' : '#FFFFFF'} />
        <Path d="M79.9983 160.812L93.1206 138.084H66.876L79.9983 160.812Z" fill={list[5] ? '#2BC2E0' : '#FFFFFF'} />
        <Path d="M22.8575 137.142L29.6501 111.791L48.2078 130.349L22.8575 137.142Z" fill={list[6] ? '#2BC2E0' : '#FFFFFF'} />
        <Path d="M-0.814453 79.9991L21.914 66.8768V93.1213L-0.814453 79.9991Z" fill={list[7] ? '#2BC2E0' : '#FFFFFF'} />
        <Path d="M22.8554 22.8575L48.2057 29.6501L29.648 48.2078L22.8554 22.8575Z" fill={list[8] ? '#2BC2E0' : '#FFFFFF'} />
        <path d="M80.3607 66.2851L65.6853 81.0063L80.3607 95.7276L95.036 81.0064L80.3607 66.2851Z" fill="#EA5EBF"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="160" height="160" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Loading;
