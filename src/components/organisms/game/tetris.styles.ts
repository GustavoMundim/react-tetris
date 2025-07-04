import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  z-index: 5;
`

const pulse = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px #ff00ff;
    opacity: 0.7;
  }
  50% {
    text-shadow: 0 0 20px #ff00ff;
    opacity: 1;
  }
`

export const WrapperText = styled.div`
  h1 {
    color: #ff00ff;
    text-shadow: 0 0 10px #ff00ff;
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
    font-size: 120px;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 50px;
    text-decoration: underline;
    animation: ${pulse} 12s infinite;
  }
`

export const Controls = styled.div`
  margin-bottom: 16px;
  width: 280px;
  margin-top: 50px;
  display: grid;
  margin-right: 120px;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  button {
    padding: 15px 50px;
    background-color: #a020f0;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
    opacity: 80%;
    box-shadow: 0 0 12px #a020f0;
    border: 2px solid white;
    letter-spacing: 2px;
    border-radius: 6px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      opacity: 1;
      transform: scale(0.9);
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
`

export const MainGrid = styled.div`
  width: 250px;
  height: 400px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: 2px solid #ff00ff;
  box-shadow: 0 0 10px #ff00ff;
  border-width: 5px;
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
`

export const WrapperNextPiece = styled.div`
  h1 {
    font-size: 18px;
    font-family: 'Orbitron', sans-serif;
    color: white;
    text-shadow: 0 0 8px white;
    margin-bottom: 30px;
  }
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 50px;
    font-family: 'Orbitron', sans-serif;
    color: white;
    text-shadow: 0 0 8px white;
    margin-bottom: 30px;
  }

  span {
    color: white;
    text-decoration: underline;
  }
`

export const GameArea = styled.div`
  display: flex;
  gap: 80px;
`

export const NextPiecePreview = styled.div`
  width: 250px;
  height: 120px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  border: 2px solid #ff00ff;
  box-shadow: 0 0 10px #ff00ff;
  border-width: 5px;
  overflow: hidden;

  display: flex;
  flex-wrap: wrap;
`

export const LevelWrapper = styled.div`
  width: 250px;
  height: 140px;
  margin-top: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #00f0ff;
  box-shadow: 0 0 10px #00f0ff;
  border-width: 5px;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    margin-top: 10px;
    text-transform: uppercase;
  }

  p {
    font-size: 50px;
    font-family: 'Orbitron', sans-serif;
    color: white;
    text-shadow: 0 0 8px white;
  }
`
