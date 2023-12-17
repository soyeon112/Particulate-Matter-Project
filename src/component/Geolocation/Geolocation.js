import React from "react";

function kakaoAPI(lat, lon) {
  const API_KEY = `79ac681bed609bac07fbf05fb2f80542`;
  let location;
  console.log("위경도", lat, lon);
  fetch(
    `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`,
    {
      method: "get",
      headers: {
        Authorization: ` KakaoAK ${API_KEY}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("카카오 받았니?", data);
      //그런데 현재 주소지의 미세먼지 데이터가 없으면.... 우짜지..? 일단 카카오로 좌표를 주소로 바꾸는것 까지는 함. 2/16 아직 그 주소내용을 저장하고 하지는 않음.
      //기능 구상 -> 내 위치를 받아서 위치 open weather api로 날씨정보(이미지, 텍스트) 출력해주고, 해당 지역의 미세먼지 카드를 출력해주고 싶음..!
      location = data.documents[0].address.address_name;
      // console.log("여긴어디 나는누구?", location);
    });
}
function Geolocation() {
  let lat, lon;
  navigator.geolocation.getCurrentPosition((position) => {
    console.log("내위치", position);
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    kakaoAPI(lat, lon);
  });
}
export default Geolocation;
