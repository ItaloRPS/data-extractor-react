import React from 'react';
import * as Styled from './styles';

export const Alert = ({ message, type }) => {
  if (!message) return null;
  return <Styled.AlertWrapper type={type}>{message}</Styled.AlertWrapper>;
};