import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'


const Content = styled.div`

  background-color:  ${(props) => props.theme.colors.BgColor};
  width: 100%;
  height: 100%;
  overflow: hidden;

`

const ContentWrap = styled.div`
  max-width: 1280px;
  width: 80%;
  margin : 0 auto;
  display: flex;
  padding: 0 2%;
  flex-wrap: wrap;
  gap: 20px 1.2%;


`
const ContentItem = styled.div`
  background-color: ${(props) => props.theme.colors.ContentBg};
  flex-basis:32.5%;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: break-spaces;
  list-style: none;

  h3{
    margin-bottom: 24px;
    color: ${(props) => props.theme.colors.Color};
  }
  li{
    margin-bottom: 13px;
    color: ${(props) => props.theme.colors.Color};
  }
  @media screen and (min-width: 641px) and (max-width: 1200px){
    flex-basis: 49%;

  }
  
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
  


`

const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  border-radius: 30px;
  margin-bottom: 24px;
  @media screen and (max-width: 640px){
    height: 180px;
  }

`

const Category = styled.div`
  width: 80%;
  margin-bottom: 1.2%;
  color: black;
  margin: 70px auto;
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
      justify-content:space-center;
      align-items: center;
        li{
          background: ${(props) => props.theme.colors.ContentBg};
          border: 1px solid #ddd;
          padding: 5px 10px;
          border-radius: 5px;
          margin-bottom: 4px;
          color:${(props) => props.theme.colors.Color};
          cursor: pointer;
          &.on{
            background-color: #0022ff;
            font-weight: bold;
            color: #fff;
          }
         
        }

}
`
const Pagination = styled.div`
  background-color: ${(props) => props.theme.colors.ContentBg};
  padding: 20px;
  border-radius: 5px;
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


  const [data,setData] = useState()
  const [allData, setAllData] = useState();
  const list = 9;
  const [page, setPage] = useState(1)
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
       setTotalCnt(res.data.getFestivalKr.totalCount);
    })
  
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


  const [isActive, setIsActive] = useState(-1);



      return (
   <>
    <Content>
     
        
         
            
                <Category>


                    <ul>
                      <li className={isActive === -1 ? 'on' : ''} onClick={
                          ()=>{
                            setGugun("전체")
                          }
                        } >전체 
                    
                        </li>

                      {
                      data && FilterGugun.map((e,i)=>{
                      return(
                
                        <li className={isActive === i ? 'on' : ''} key={i} onClick={
                          ()=>{
                        
                            setIsActive(i)
                            setGugun(e)
                    
                          }
                        }>{e} 
              
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
                        state={e}
                        >

                        
                      <Image src={e.MAIN_IMG_THUMB} alt="e.MAIN_TITLE" />
                      <h3>{e.TITLE}</h3>
                      <ul>
                        <li>장소 | {e.GUGUN_NM}</li>
                        
                        {
                          e.MIDDLE_SIZE_RM1 !== "" &&
                          <li>편의시설 | {e.MIDDLE_SIZE_RM1}</li>
                        }
                        
                        <li>축제기간 | {e.USAGE_DAY_WEEK_AND_TIME}</li>

                        {
                          e.MAIN_PLACE !== "" &&
                          <li>주요장소 : {e.MAIN_PLACE}</li>
                        }
                        
                      </ul>
                      </NavLink>
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