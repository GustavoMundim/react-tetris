import styled from 'styled-components'

export const Container = styled.div`
  width: 1920px;
  height: 100vh;
  display: flex;
  background-image: url('background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  pointer-events: none;
  position: absolute;
`
