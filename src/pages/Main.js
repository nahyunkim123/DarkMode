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
  background-color: ${(props) => props.theme.colors.ContentBg};
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
    color: ${(props) => props.theme.colors.Color};
  }
  li{
    margin-bottom: 13px;
    color: ${(props) => props.theme.colors.Color};
  }
  @media screen and (max-width: 1200px){
    flex-basis: 49%;
  }
  
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
  


`

const Category = styled.div`
width: 100%;
margin-bottom: 1.2%;
color: black;
  .active{
    color: white;
    background-color: hotpink;
  }
    ul{
      max-width: 1280px;
      margin: 20px auto;
      display: flex;
      flex-wrap: wrap;
      column-gap: 15px;
      justify-content:space-between;
      align-items: center;
        li{
          background: ${(props) => props.theme.colors.ContentBg};
          border: 1px solid #ddd;
          padding: 5px 10px;
          border-radius: 5px;
          color:${(props) => props.theme.colors.Color};
          cursor: pointer;
          &.on{
            background-color: ${(props) => props.theme.colors.SelectBg};
            font-weight: bold;
            color: #9c9c9c;
          }
         
        }

}
`
const Pagination = styled.div`
background-color: ${(props) => props.theme.colors.ContentBg};
padding: 20px;
border-style: 5px;
border: 1px solid #ddd;
      ul{
            max-width: 1200px;
            margin: 20px auto;
            display: flex;
            flex-wrap: wrap;
            column-gap: 20px;
            justify-content: center;
            align-items: center;
              li{
                padding: 5px;
                background: #ffffffcf;
                border: 1px solid #ddd;
                width: 50px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                border-radius: 50%;
                cursor: pointer;
                &.on {
                  background-color: #0022ff;
                  font-weight: bold;
                  color: #ffffff;
               
              } 
            }
            }

`


function Main() {

  // const [data,setData] = useState(dataList)
  const [data,setData] = useState()
  const [allData, setAllData] = useState();
  const list = 9;
  const [page, setPage] = useState(1)
  // const [totalCnt, setTotalCnt] = useState(30)
  const [totalCnt, setTotalCnt] = useState(0)
  const pagination = 5;
  const totalPage = Math.floor(totalCnt / list)
  const [gugun, setGugun] = useState("전체")
  const PageList = [];

  let startPage;
  let endPage;

  const currentBlock = Math.ceil(page / pagination)
  startPage = (currentBlock -1) * pagination + 1;
  endPage = startPage + pagination -1;
  if(endPage > totalPage) {
    endPage = totalPage;
  }
 
  const PrevBlock = () =>{
        if(startPage >1)
          setPage(startPage - pagination);
        
  } 
  const NextBlock = () =>{
    if(endPage < totalPage)
      setPage(startPage + pagination);
      
 
  }

  for(let i = startPage; i < endPage; i++){
    PageList.push(
      <li key={i} className={page === i ? "on" : ""}
        onClick={()=>{
          setPage(i)
        }} >{i}
        
      </li>
    )

 
  }


  useEffect(()=>{
    axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=${page}&numOfRows=${list}&resultType=JSON`)
    .then(function(res){
       setData(res.data.getFestivalKr.item);
      //  setTotalCnt(res.data.getFestivalKr.totalCount);
       setTotalCnt(500);
    })
    // console.log(process.env.REACT_APP_APIKEY);
  },[page])

  useEffect(()=>{
    axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=100&resultType=JSON`)
    .then(function(res){
       setAllData(res.data.getFestivalKr.item);
    
      })
  },[])

  const FilterData = data && data.filter(e=>{
    return(
      gugun === "전체" || gugun === e.GUGUN_NM
    )

  })

  const FilterGugun = [...new Set(allData && allData.map(e=> e.GUGUN_NM))];

  // const [isActive, setIsActive] = useState(false);
  const [isActive, setIsActive] = useState(-1);
  // useState 값이 숫자로 들어가야 함
 
  // const [isColor, setIsColor] = useState(-1);


  console.log(FilterGugun);
  console.log(data);

      return (
   <>
    <Content>
        {/* <p>Lorem ipsum dolor sit amet.</p> */}
        
         
            
                <Category>


                  {/* <div className={isColor === -1 ? 'active' : ''} onClick={
                        ()=>{
                          setIsColor(-1)
                        }
                      }>{`인덱스번호 : -1`}</div>
                  {Array(5).fill().map((e,i)=>{
                      return(
                          <div className={ isColor === i ? 'active' : '' }
                          onClick={()=>{
                            setIsColor(i)
                          }}
                        >{`인덱스번호 : ${i}`}</div>
                      )
                  })
                  } */}


                    <ul>
                    <li className={isActive === -1 ? 'on' : ''} onClick={
                        ()=>{
                          setIsActive(-1);
                          setGugun("전체")
                        }
                      } >전체 
                      {/* {isActive} */}
                      </li>

                    {
                    data && FilterGugun.map((e,i)=>{
                    return(
                    //  <li className={isActive === true ? 'on' : ''} key={i} onClick={
                      <li className={isActive === i ? 'on' : ''} key={i} onClick={
                        ()=>{
                          // setIsActive( isActive === false ? true : false )
                          // setIsActive(!isActive)  
                          setIsActive(i)
                          setGugun(e)
                          // false,true 일 때만 동작
                        }
                      }>{e} 
                      {/* {i}{isActive} */}
                      </li>

                          )
                        })
                      }
                    </ul>
                </Category>
         
       
        
        <ContentWrap>
            
              
                {
                  data && FilterData.map((e,i)=>{
                  
                    return(
                      <ContentItem key={i}>
                        <NavLink to={`detail/${e.UC_SEQ}`}
                        state={
                          // {data : "test"}
                          e
                        }
                        >
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

    <Pagination>
      <ul>
        <li onClick={PrevBlock} > PREV</li>
        {PageList}
        <li onClick={NextBlock} > NEXT </li>
 
      </ul>
    </Pagination>


   </>
  )
}

export default Main