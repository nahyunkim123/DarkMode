import React, { useState } from 'react'
import { styled } from 'styled-components'
import Example3_ from './../components/Example3'


const Nav = styled.div`
 width: 1200px;
 margin: 0 auto;
 height: 30px;
 background-color: aliceblue;
 ul{
    display: flex;
    margin-bottom: 10px; 
    li{
      flex-basis: 75%;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }
  

  }

`

const Style = styled.div`
margin: 30px auto;
width: 1200px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
row-gap: 18px;
column-gap: 15px;
`

const ContentItem = styled.div `
  flex-basis: 32.5%;
  height: 400px;
  box-shadow: 0px 0px 5px gray;
  border-radius: 2px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  text-align: center;
  
  cursor: pointer;
  @media screen and (max-width:1200px) {
    flex-basis:49.5%
  }
  @media screen and (max-width:640px) {
    flex-basis:100%
  }
  
`





function Example3() {
  // 1.예제 3번에 있는 데이터를 가져온다
  const [data, setData] = useState(Example3_);



  // 2. 중복값 제거, 리스트 화면 출력
 
  const [animal, setAnimal] = useState("전체");
  


  const dataFilter = data.filter(e =>{
    if(animal === "전체"){
      return e.animal

    }else{
      return e.animal === animal

    }

    
  
    
    
 
   
  })


  
   const typeFilter = [...new Set(data.map(e=> e.animal))];
  

  return (
    <>

    <Nav>
      <ul>
          <li onClick={()=>{setAnimal("전체")}}>전체</li>
          <li>
          {
            typeFilter.map((e,i)=>{
              return(
                <li key={i} onClick={()=>{setAnimal(e)}}>{e}</li>

              )
            })
          }
          </li>
        </ul>
    </Nav>
    <Style>
     

      {


        dataFilter.map((el,i)=>{
                return(
                <ContentItem>

                <img src={el.img} alt="cat" />
                <p key={i}>{el.animal}</p>
                <p key={i}>{el.gender}</p>
                <p key={i}>{el.height}</p>
                </ContentItem>
                )
              })
      }



        
    </Style>


    </>
    
  )
}

export default Example3