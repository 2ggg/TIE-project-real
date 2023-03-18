import React from 'react'
import Header from '../components/Header'
//?메인페이지 쿠키가 있는가 없는가로 헤더로 어떤것을 내려다 줄까?
//*쿠키 값을 내려다 줘야지. 그래서 header 에서 decode 사용하지.
//*토큰을 받았다? 그럼 여기서 쿠키에 저장하자.


function Main() {
  return (
    <div>
      <Header />
      <h1 style={{ backgroundColor: '#ff8e8e' }}>홈페이지</h1>
    </div >
  )
}

export default Main;