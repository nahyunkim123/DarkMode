import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import dataList from './../data/data'
import { NavLink } from 'react-router-dom'


const Content = styled.div`

  background-color:  ${(props) => props.theme.colors.BgColor};
  width: 100%;
  padding: 120px 0 50px 0;
  height: 100%;
  /* p{
    color: ${(props) => props.theme.colors.Secondary};
  } */
  overflow: hidden;

`

const ContentWrap = styled.div`
  max-width: 1200px;
  margin : 0 auto;
  display: flex;
  padding: 0 2%;
  flex-wrap: wrap;
  gap: 20px 1.2%;


`
const ContentItem = styled.div`
  background-color: #fff;
  flex-basis:32.5%;
  border:1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: break-spaces;
  //줄이 길어지면 자동으로 줄바꿈
  list-style: none;
  img{
    width: 100%;
    display: block;
    margin-bottom: 24px;
  }
  h3{
    margin-bottom: 24px;
  }
  li{
    margin-bottom: 13px;
  }
  @media screen and (max-width: 1200px){
    flex-basis: 49%;
  }
  
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
  


`

function Main() {

  const [data,setData] = useState(dataList)
  const list = 12;
  const [page, setPage] = useState(1)
  const [totalCnt, setTotalCnt] = useState(0)
  const pagination = 5;
  const totalPage = Math.floor(totalCnt / list)


      console.log(data);
      return (
   <>
    <Content>
        {/* <p>Lorem ipsum dolor sit amet.</p> */}
        <ContentWrap>
            
              
                {
                  data.map((e,i)=>{
                  
                    return(
                      <ContentItem key={i}>
                        <NavLink to={`detail/${e.UC_SEQ}`}>
                          <h3>{e.TITLE}</h3>

                        </NavLink>
                      <img src={e.MAIN_IMG_THUMB} alt="e.MAIN_TITLE" />
                      <ul>
                        <li>구군: {e.GUGUN_NM}</li>
                        
                        {
                          e.MIDDLE_SIZE_RM1 !== "" &&
                          <li>편의시설: {e.MIDDLE_SIZE_RM1}</li>
                        }
                        
                        <li>축제기간: {e.USAGE_DAY_WEEK_AND_TIME}</li>
                        {
                          e.MIDDLE_SIZE_RM1 !== "" &&
                          <li>편의시설: {e.MIDDLE_SIZE_RM1}</li>
                        }
                        {
                          e.USAGE_AMOUNT !== "" &&
                        <li>이용요금 : {e.USAGE_AMOUNT}</li>
                        }
                        
                        <li>교통편 : {e.TRFC_INFO}</li>

                        {
                          e.MAIN_PLACE !== "" &&
                          <li>주요장소 : {e.MAIN_PLACE}</li>
                        }
                        
                      </ul>
                      </ContentItem>
                    )
                  })
                }
              

       
            
        </ContentWrap>
    
    </Content>

   </>
  )
}

export default Main