function findmap(){

    var array = document.querySelectorAll('.suDiv2');
    var lat = document.querySelectorAll('.lat');
    var lon = document.querySelectorAll('.lon');


    array.forEach((el, index) => {
        el.onclick = () => {

            var lat1 = lat[index].textContent;
            var lon1 = lon[index].textContent;
          console.log(index);
          console.log(lat1);
          console.log(lon1);
        }
        
    });
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(lat1,lon1), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
    
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(lat1,lon1); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    
}