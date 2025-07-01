import styled from 'styled-components'

export const GridCell = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;

  h1 {
    color: white;
    position: relative;
    text-align: center;
    font-size: 12px;
    text-indent: 20px;
    margin-top: 10px;
    text-shadow: 0px 0px 5px black;
  }
`
