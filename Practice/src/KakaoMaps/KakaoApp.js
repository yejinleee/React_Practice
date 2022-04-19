import React, { useEffect, useRef } from 'react';

const { kakao } = window;
const options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};
function KakaoApp() {
    const container = useRef(null); //훅스로 DOM 레퍼런스

    useEffect(() => {
        new kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
        return ()=>{};
    }, []);
    
    return (
        <>
            <div ref={container} id="map" style={{width:"500px", height:"400px"}}> </div>
        </>
    );
}

export default KakaoApp;