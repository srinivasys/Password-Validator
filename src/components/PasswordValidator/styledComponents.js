import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
  font-family: 'Roboto';
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  width: 65%;
  height: 35vh;
  border-radius: 15px;
  min-width: 350px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 50vh;
    min-width: 500px;
    max-width: 600px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`

export const Paragraph = styled.p`
  color: #f8fafc;
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
  width: 80%;
  margin-top: 14px;
  margin-bottom: 17px;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top: 25px;
    margin-bottom: 30px;
  }
`

export const Input = styled.input`
  color: #475569;
  background-color: #edeeff;
  font-size: 15px;
  height: 45px;
  font-family: 'Roboto';
  border: 1px solid #24263c;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 15px;
  min-width: 300px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 25px;
    height: 50px;
    margin-top: 30px;
    min-width: 400px;
  }
`

export const ErrMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.2;
`
