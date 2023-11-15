'use client'

import styled from 'styled-components'

export const LetterBoard = styled.div`
  // background-image: url('/icons/SolarSystem.png');
  // background-repeat: no-repeat;

  // display: flex;
  // place-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);

  min-height: 20rem;
  width: 95%;
  border-radius: 0.625rem;
  padding: 1rem;
`

export const DecoBottonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  margin-bottom: 1rem;
  align-self: flex-start;
  justify-self: start;
`
const LetterDecoBotton = styled.div`
  border-radius: 500px;
  width: 1.5rem;
  height: 1.5rem;
`
export const RedDecoBotton = styled(LetterDecoBotton)`
  box-shadow: 0px 4px 0px
    rgba(211.43749594688416, 167.57891178131104, 160.34010261297226, 1);
  background-color: rgba(255, 152.24383145570755, 134.93749290704727, 1);
`
export const YellowDecoBotton = styled(LetterDecoBotton)`
  box-shadow: 0px 4px 0px
    rgba(221.00000202655792, 206.0000029206276, 164.00000542402267, 1);
  background-color: rgba(255, 224.59425956010818, 137.06250607967377, 1);
`
export const GreenDecoBotton = styled(LetterDecoBotton)`
  box-shadow: 0px 4px 0px
    rgba(173.11667382717133, 221.00000202655792, 175.61491817235947, 1);
  background-color: rgba(
    196.3987085223198,
    254.7875154018402,
    199.179125726223,
    1
  );
`

export const LetterContent = styled.div`
  max-height: 10rem;
  margin-top: 0.5rem;
  word-wrap: break-word;
  overflow-y: scroll;
`
export const LetterInput = styled.textarea`
  height: 100%;

  //   background-image: url('/icons/RandomLetterBG.png');
  box-shadow: inset 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(
    250.00000029802322,
    247.00000047683716,
    240.00000089406967,
    1
  );

  border-radius: 0.5rem;
  resize: none;

  padding: 1rem;

  background-attachment: local;
  background-image: repeating-linear-gradient(
    rgba(250.00000029802322, 247.00000047683716, 240.00000089406967, 1),
    rgba(250.00000029802322, 247.00000047683716, 240.00000089406967, 1) 34px,
    lightgray 34px,
    lightgray 36px
  );
  line-height: 36px;
  padding: 8px 10px;
  outline: none;
`

export const LetterReceived = styled.div`
  position: relative;

  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gorder-radius: 0.5rem;
`

export const LetterHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LetterName = styled.h1`
  color: #111827;
  font-size: 1rem;
  font-weight: bold;
`
export const LetterDate = styled.p`
  color: #696969;
  font-size: 0.7rem;
`
export const WarningText = styled.p`
  margin-top: auto;
  justify-self: center;

  font-size: 0.8rem;
  color: #e95a42;
  font-weight: bold;

  margin-left: auto;
  margin-right: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const ButtonWrapper = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Button = styled.button`
  margin-top: auto;

  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(
    61.834769770503044,
    60.64422145485878,
    130.88671267032623,
    1
  );
  width: 6rem;
  height: 2.3rem;
  border-radius: 1.25rem;

  color: white;
  font-size: 1.2rem;
`

export const ContentLimit = styled.div`
  font-size: 0.8rem;
  // color: gray;
  text-align: right;
  margin-right: 2rem;
`
