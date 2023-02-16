import React from "react";

function kakaoAPI(lat, lon) {
  const API_KEY = `79ac681bed609bac07fbf05fb2f80542`;
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
      //그런데 현재 주소지의 미세먼지 데이터가 없으면.... 우짜지..? 일단 카카오로 좌표를 주소로 바꾸는것 까지는 함. 2/16
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

  return <div></div>;
}
export default Geolocation;
