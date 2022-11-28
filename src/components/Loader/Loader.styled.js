import styled from 'styled-components';
export const DivLoader = styled.div`
  border: 6px groove #7e57c2;
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
  -webkit-animation: loader-1-inner 1s ease-out alternate infinite;
  animation: loader-1-inner 1s ease-out alternate infinite;
`;

export const LoaderBody = styled.div`
  border: 0px inset #9575cd;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  -webkit-animation: border-zoom 1s ease-out alternate infinite;
  animation: border-zoom 1s ease-out alternate infinite;
`;
