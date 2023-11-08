import styled from 'styled-components'

export const arriveButton = styled.div`
  background-color: #ffd27a;
  border-radius: 10px;
  color: black;
  width: 90px;
  height: 45px;
  text-align: center;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.2),
    -2px -2px 5px #612f69; // 그림자 효과를 추가하여 입체감을 높입니다
`

export const arriveLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: black;
`

export const ContentBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 20;
`

// width: '100%',
// height: '200px',
// marginTop: '50px',
// marginBottom: '50px',
export const UfoStyle = styled.div`
  width: 100%;
  height: 100%;
  maring-top: 50px;
  margin-bottom: 50px;
`
