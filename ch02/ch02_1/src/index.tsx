import React from 'react'
import ReactDOM from 'react-dom/client'

// 일반적인 JS에서 사용하는 방법
// pPhysicalDOM: 물리 DOM 객체
let pPhysicalDOM = document.createElement('p') // <p> 요소 생성
pPhysicalDOM.innerText = 'Hello physical DOM world!'
// <p> 요소를 <body>의 마지막 자식 요소로 추가
// pPhysicalDOM 객체를 DOM 트리에 추가 -> 결과를 pPhysicalDOM 객체가 렌더링됨
document.body.appendChild(pPhysicalDOM)

// React 방식 - 가상 DOM 객체 사용
const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(pVirtualDOM) // 가상 DOM -> 물리 DOM으로 전환
