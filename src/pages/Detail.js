
import { Map, MapMarker, Roadview } from 'react-kakao-maps-sdk';
import { useLocation } from 'react-router'
import { styled } from 'styled-components'

const BG = styled.div`
  background-color:  ${(props) => props.theme.colors.BgColor};
  width: 100%; height: 100%;
  padding-top: 80px;
`

const Content = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  background-color: ${(props) => props.theme.colors.ContentBg};
  color:${(props) => props.theme.colors.Color};
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.Color};
  padding: 20px;
  img{width: 100%;}
  h3{
    font-size: 36px;
    margin-bottom: 15px;
  }
`


function Detail() {
  
  const location = useLocation();
  const data = location.state;
  console.log(data.LNG)
  return (
    <BG>
    <Content>
      <h3>{data.TITLE}</h3>
      <img src={data.MAIN_IMG_NORMAL} alt={data.TITLE} title={data.TITLE} />
      
      <Map center={ 
        {
        lat: data.LAT,
        lng: data.LNG
      }
      } style={{width:"100%", height:"360px"}}>
        
        <MapMarker position={{
               
            lat: data.LAT,
            lng: data.LNG
      
        }}>

        </MapMarker> 
      </Map>
      <Roadview position={{
               
            lat:data.LAT,
            lng: data.LNG,
            radius:50
      
        }} style={{width:"100%", height:"450px"}}>

        </Roadview> 

      <p style={{textAlign: "justify" , lineHeight: 2}}>{data.ITEMCNTNTS}</p>
    </Content>
    </BG>
  )
}

export default Detail