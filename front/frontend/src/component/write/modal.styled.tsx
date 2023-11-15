// modal.styled.tsx

import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContent = styled.div`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 280px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1rem;
  border: 2px solid gray;
  text-align: center;
`
export const ModalContent2 = styled.div`
  z-index: 20;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 280px;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 1rem;
  border: 2px solid gray;
  // text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalText = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`

export const ModalInputDiv = styled.div`
  position: relative;
`

export const ModalImg = styled.img`
  position: absolute;
  width: 60px;
  height: 60px;
  top: -20px;
  left: 200px;
`
export const ModalInput = styled.textarea`
  margin-top: 10px;
  width: 245px;
  height: 80px;
  background-color: #ffe189;
  border-radius: 10px;
  font-size: 13px;
  padding: 1rem;
  line-height: 1.5;
  resize: none;
`

export const ModalInputTextLimit = styled.div`
  position: absolute;
  font-size: 9px;
  top: 78px;
  left: 231px;
`
export const CloseButton = styled.button`
  width: 245px;
  height: 30px;
  background-color: #947d7e;
  color: white;
  font-size: 13px;
  border-radius: 10px;
  margin-top: 0.5rem;
`
export const Button = styled.button`
  width: 110px;
  height: 30px;
  background-color: #947d7e;
  color: white;
  font-size: 13px;
  border-radius: 10px;
  margin: 5px;
`

export const CloseButton2 = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ffe189;
  font-size: 16px;
  border-radius: 10px;
`

export const FileInput = styled.input`
  height: 40px;
  display: none;
`
export const FileInputWrapper = styled.div``

export const FileInputLabel = styled.label``

export const XButton = styled.img`
  position: absolute;
  width: 17px;
  top: 15px;
  left: 245px;
`

export const errMessage = styled.div`
  color: red;
`

export const PreviewImg = styled.img`
  margin-bottom: 0.5rem;
`

export const PreviewMovie = styled.video`
  margin-bottom: 0.5rem;
`

export const PreviewAudio = styled.audio`
  width: 100%;
  margin-bottom: 0.5rem;
`
export const EmptyDiv = styled.div``

export const RepairImg = styled.img`
  width: 120px;
  margin: auto;
`

export const ModalPhone = styled.input`
  width: 160px;
  height: 30px;
  text-align: center;
  border-bottom: 2px dashed black;
  font-size: 1rem;

  &:focus {
    outline: none; /* 기본 포커스 아웃라인 제거 */
    border-bottom: 2px dashed black;
  }
`

export const SearchButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: #ffe189;
  font-size: 16px;
  border-radius: 10px;
`

export const possible = styled.div`
  font-size: 0.8rem;
  color: blue;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
`
export const impossible = styled.div`
  font-size: 0.8rem;
  color: red;
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
`

export const ContentLimit = styled.div`
  font-size: 0.8rem;
  // color: gray;
  text-align: right;
  margin-right: 2rem;
`
