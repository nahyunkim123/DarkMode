import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { styled } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'

// 스타일 컴포넌트 추가하기
const StyleDate = styled(DatePicker)`
border: 1px solid gray;
  width: 330px;
  margin-top: 20px;
    
    
`
const {kakao} = window;

function Datepicker() {
    
    // 로딩후에 실행시키기 위함

    useEffect(()=>{

        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.5827570, 126.991295), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
        };
    
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

                // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(37.5827570, 126.991295); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);


        var roadviewContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
    var roadview = new kakao.maps.Roadview(roadviewContainer); //로드뷰 객체
    var roadviewClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를 가져올 로드뷰 helper객체

    var position = new kakao.maps.LatLng(37.5827570, 126.991295);

    // 특정 위치의 좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
    roadviewClient.getNearestPanoId(position, 50, function(panoId) {
    roadview.setPanoId(panoId, position); //panoId와 중심좌표를 통해 로드뷰 실행



    var infowindow = new kakao.maps.InfoWindow({zIndex:1});
    // 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다
ps.keywordSearch('이태원 맛집', placesSearchCB); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}

// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
}
});


    },[])
    
    
    const [dateRange, setDateRange] = useState(([null,null]));
    const [startDate, endDate] = dateRange;
      
        const handleCalendarClose = () => console.log("Calendar closed");
        const handleCalendarOpen = () => console.log("Calendar opened");
    
  return (
    <>

    <div id="map" style={{width:500,height:500}}></div>
    <div id="roadview" style={{width:500,height:500}}></div>

    
    <StyleDate
    
      locale={ko}
      selectsRange = {true}
      startDate={startDate}
      endDate={endDate}
      onChange={(date) => setDateRange(date)}
      onCalendarClose={handleCalendarClose}
      onCalendarOpen={handleCalendarOpen}
      dateFormat="yyyy년-MM월-dd일"
      minDate ={subDays(new Date(),  0)}
      maxDate = {addDays(new Date(), 90)}
      monthsShown={2}
      
    />



    </>
    )
  
}

export default Datepicker