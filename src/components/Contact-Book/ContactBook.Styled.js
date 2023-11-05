import styled, { keyframes } from 'styled-components';

const rotateHue = keyframes`
  to {
    filter: hue-rotate(1turn);
  }
`;

export const PhoneBookContainer = styled.div`
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;

  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #4158d0;
  background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
`;

export const PhoneBookTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
  margin-bottom: 16px;
`;

export const PhoneBookInputContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  margin-bottom: 16px;
  flex-wrap: wrap;
`;

export const PhoneBookInputLabel = styled.p`
  display: flex;
  flex: 1;
  font-size: 18px;
  color: #333;
  margin: 0;
  margin-top: 8px;
`;

export const PhoneBookInput = styled.input`
  flex: 3;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  background: linear-gradient(315deg, #ff0058, #03a9f4);
`;

export const PhoneBookButton = styled.button`
  --border-radius: 4px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  z-index: 2;
  &::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: ${rotateHue} linear 1000ms infinite;
    animation-play-state: running;
  }

  &,
  &::after {
    box-sizing: border-box;
  }

  &:active {
    --border-width: 5px;
  }
  flex: 1;
  width: fit-content;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: auto;
  margin-top: 8px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #0056b3;
  }
`;

export const PhoneBookContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const PhoneBookContactItem = styled.li`
  font-size: 16px;
  margin: 8px 0;
`;

export const PhoneBookContactTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
  margin-bottom: 16px;
`;

export const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  gap: 10px;
  background: linear-gradient(
    315deg,
    #ff9f0e,
    #e440bb,
    #655adc,
    #488cfb,
    #488cfb,
    #29dbbc,
    #ddf505
  );
`;

export const DeleteButton = styled.button`
  --border-radius: 4px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  z-index: 2;
  &::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: ${rotateHue} linear 1000ms infinite;
    animation-play-state: running;
  }

  &,
  &::after {
    box-sizing: border-box;
  }

  &:active {
    --border-width: 5px;
  }

  width: fit-content;
  background-color: #007bff;

  transition: background-color 0.3s;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #0056b3;
  }

  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
// ====================================================
