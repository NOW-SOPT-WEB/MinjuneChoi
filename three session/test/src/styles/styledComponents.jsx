import styled from 'styled-components';

export const StyledCard = styled.div`
  perspective: 1000px;
  cursor: pointer;
  & > div {
    width: 150px;
    height: 150px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
`;

export const CardInner = styled.div`
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'none'};
`;

export const CardFace = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 150rem;
  height: 150rem;
  border-radius: 20px;
  box-shadow: 0 5px 10px ${props => props.theme.colors.shadow};
`;

export const CardBack = styled(CardFace)`
  background: ${props => props.theme.colors.primary};
`;

export const CardFront = styled(CardFace)`

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  color: white;
  transform: rotateY(180deg);
  background-size: cover; 
  background-position: center; 
`;

export const GameStatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  box-shadow: 0 5px 10px ${props => props.theme.colors.shadow};
  margin-bottom: 20px;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.modalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px ${props => props.theme.colors.shadow};
  text-align: center;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
