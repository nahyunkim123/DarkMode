import React, { useState } from 'react'
import { styled } from 'styled-components'
import Example2_ from './../components/Example2'

const Style = styled.div`
max-width: 1200px;
display: flex;
justify-content: space-start;
margin: 100px auto;
padding: 0 2%;
flex-wrap: wrap;
column-gap: 12px;
row-gap: 12px;
`
const ContentItem = styled.div `
  flex-basis: 32.5%;
  border: 1px solid #ddd;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (max-width:1200px) {
    flex-basis:49.5%
  }
  @media screen and (max-width:640px) {
    flex-basis:100%
  }
  
`
const Button = styled.button`
  display: block;
  width: 120px;
  padding: 5px 20px;
  margin: 0 auto;
  border: 1px solid #ddd;
  cursor: pointer;
`


function Example2() {

  const [data, setData] = useState(Example2_)
  // 현재 페이지
  let [current, setCurrent] = useState(1)

  // 그룹 데이터 필터
  const dataFilter = data.filter(e => e.group <= current)


  return (
  <>
    <Style>
      {
         dataFilter.map((e,i)=>{
          return(
          <ContentItem key={i}>
              <p>COLOR | {e.color}</p>
              <p>SCORE | {e.score}점</p>
          </ContentItem>
          )
        })
      }
     
     

    </Style>
    <Button onClick={()=>setCurrent(current+1)}>
        <p>MORE</p>
      </Button>
  </>
  )
}

export default Example2