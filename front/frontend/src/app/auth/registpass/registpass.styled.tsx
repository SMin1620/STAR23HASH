import styled from 'styled-components'

export const inputStyle = styled.input`
  width: 240px;
  height: 45px;
  margin-bottom: 15px;
  border-radius: 10px;
  opacity: 0.7;
  text-align: center;
  background-color: rgb(203 213 225);
  font-size: 15pt;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red; /* 색상을 변경하고 싶은 색상으로 바꿔주세요 */
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: red;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: red;
  }
`

export const Button = styled.div`
  background-color: #ffe189;
  border-radius: 10px;
  color: black;
  width: 120px;
  height: 45px;
  text-align: center;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17pt;
`
