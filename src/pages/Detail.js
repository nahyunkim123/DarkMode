import { Map, MapMarker, Roadview } from 'react-kakao-maps-sdk';
import { useLocation } from 'react-router'
import { styled } from 'styled-components'

const BG = styled.div`
  background-color:  ${(props) => props.theme.colors.BgColor};
  width: 100%; 

  img{
    width: 100%; 
    height: 300px;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

  }
`


const Content = styled.div`
  max-width: 1280px;
  width: 80%;
  margin: 300px auto;
  background-color: ${(props) => props.theme.colors.ContentBg};
  color:${(props) => props.theme.colors.Color};
  border-radius: 5px;
  padding: 20px;
  
  >h3{
    font-size: 40px;
    margin-bottom: 15px;
  }
`
const DetailCon = styled.div`
  margin-top: 50px;
  >h3{
    font-size: 30px;
    border-bottom: 1px solid #eee;
  }
`
const MapCon = styled.div`
  margin-top: 50px;
  >h3{
    font-size: 30px;
    border-bottom: 1px solid #eee;
  }
`

function Detail() {
  
  const location = useLocation();
  const data = location.state;



  return (
    <BG>
      <img src={data.MAIN_IMG_NORMAL} alt={data.TITLE} title={data.TITLE} />
      <Content>
        <h3>{data.TITLE}</h3>
        <DetailCon>
          <h3>상세정보</h3>
          <p style={{textAlign: "justify" , lineHeight: 2}}>{data.MIDDLE_SIZE_RM1}</p>
          {
          data.USAGE_AMOUNT==""&&
            <p style={{textAlign: "justify" , lineHeight: 2}}> 비용 | {data.USAGE_AMOUNT}</p>
          }
          <p style={{textAlign: "justify" , lineHeight: 2}}>교통편 | {data.TRFC_INFO}</p>
        </DetailCon>
        <MapCon>
          <h3>길찾기</h3>
          <Map center={ 
            {
            lat: data.LAT,
            lng: data.LNG
          }
          } style={{width:"90%", height:"360px", margin:"auto", marginTop:"20px"}}>
            
            <MapMarker position={{
                
                lat: data.LAT,
                lng: data.LNG
          
            }}>

            </MapMarker> 
            </Map>
        </MapCon>
      </Content>
    </BG>
  )
}

export default Detail