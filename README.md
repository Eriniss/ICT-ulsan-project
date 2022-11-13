# [ICT-울산_정희섭]My Diary


## 소개

ICT 교육과정의 마지막인 프로젝트 입니다.


## 프로젝트 주제

각종 도서와 독서감상문을 공유하는 웹 사이트라는 주제로 프로젝트를 작성하였습니다.


## 목표

- JS 대신 TS를 사용함으로써 도전의식 부여
- 그외 익숙하지 않은 다양한 기술(MongoDB, AWS 등)의 학습


## 구현해야할 기능

- 자기소개 페이지 만들기
- 게시판 만들기(CRUD 구현)
- 페이지네이션 기능 만들기


## 구현 하고싶은 기능

- 반응형 웹 디자인 구현(pc, 태블릿, 스마트폰 모두 사용가능한 웹)
- 다크모드 구현

## 개발 일지

- 2022.11.03 프로젝트 구상 및 구조 갖추기, 메뉴바 기능 추가
- 2022.11.04 메인페이지 카로우셀 및 이주의 도서 기능 추가
- 2022.11.05 포스트 페이지 작성 및 각종 페이지 라우터 추가
- 2022.11.06 CRUD 중 C 기능 추가
- 2022.11.07 CRUD 기능 모두 추가 및 메뉴바 코드 리팩토링(미디어쿼리 구현)
- 2022.11.09 페이지네이션 기능 추가
- 2022.11.13 독서감상문(정적) 및 로그인 페이지 추가


## 세부 개발 예정



## 사용 예정인 기술 & 스택

- 사용언어 : 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

- 백엔드 : 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- 프론트엔드 : 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## 프로젝트 리뷰

프로젝트의 전반적인 기능은 모두 구현하였습니다.

메인페이지

>메인페이지의 경우 부트스트랩의 라이브러리를 사용하여 carousel 배너를 구현하였습니다. 이주의 도서의 경우 정적으로 구현하였습니다.

프로젝트 소개글

>프로젝트 소개글에는 저의 개인적인 소개글을 작성하였습니다. 역시 정적으로 구현하였으며 JSON 객체를 사용한 Ajax 통신으로 데이터를 받아와 페이지에 삽입하였습니다.

라이브러리

>라이브러리의 경우 CRUD 기능과 페이지네이션 기능을 구현하였습니다.

독서감상문

>프로젝트 소개글과 마찬가지로 정적으로 구현하였으며 JSON 객체를 사용한 Ajax 통신으로 데이터를 본문에 삽입하였습니다.

커뮤니티

>본래는 CRUD 기능을 추가하려고 하였으나 MongoDB의 데이터 테이블을 분산할 줄 몰라 따로 구현하지 못하였습니다.

로그인

>본래 로그인 기능(카카오 로그인)을 추가하려 하였지만 해결하지 못한 오류가 발생하여 구현하지 못하였습니다.


개인이 진행하기에 생각보다 어려움이 많은 프로젝트였습니다. 특히 로그인 기능이 아쉽습니다. 그래도 여러모로 의미있는 프로젝트가 아니였나 싶습니다. 특히 리액트에서 사용하는 훅, useState, useEffect 에 대한 이해도, document SQL 데이터 처리법, 백엔드 코드를 작성하는 실력이 늘었다고 확신이 듭니다. 막히는 부분(특히 MongoDB에 데이터를 저장하는 부분)에서 이리저리 방황도 많이하고 헤맸지만 그래도 나름 만족스러운 결과물을 얻은것 같아 기쁩니다.