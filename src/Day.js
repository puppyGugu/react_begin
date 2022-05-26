import React from "react";
// import {Route} from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

// const Day = (props) => {
const Day = ({match}) => {
    const history = useHistory();
    // const day_id = useParams();
    const [rate, setRate] = React.useState(0);
    // rate에는 state 값이, setRate는 rate라는 state 값을 수정하는 함수.
    // useState(초기값) == "rate의 초깃값은 0"

    // console.log(props);
    // console.log(day_id);
    return  <div>
        <DayTit>{match.params.day_id}요일</DayTit>
        <DayTxt>평점 남기기</DayTxt>

        <StarBox>
           {Array.from({ length: 5 }, (item, idx) => {
              return (
                <Star
                  key={idx}
                  onClick={() => {
                  setRate(idx + 1);
                  }}
                  // setRate로 idx값을 +1하게 해줌. 클릭할 때!!
                  style={{
                    backgroundColor: rate < idx+1 ? "#eee" : "coral",
                  }}
                />
              );
          })}
        </StarBox>

        <Button onClick={() => {
            history.push("/");
        }}>평점 남기기</Button>
    </div>
};


export default Day;


const DayTit = styled.div`
    display:inline-block;
    font-size:1.3em;
    font-weight: 600;
`

const DayTxt = styled.div`
    display:inline-block;
    margin-left:6px;
    font-size:1.3em;
    font-weight: 600;
`

const StarBox = styled.div`
    margin:20px 0;
`

const Star = styled.div`
    display:inline-block;
    width: 35px;
    height: 35px;
    border-radius: 35px;
    border: 1px solid #eee;
    margin-right: 5px;
    cursor: pointer;
`;

const Button = styled.button`
    padding:10px 50px;
    background-color:darkblue;
    border:none;
    border-radius:20px;
    color:#fff;
    font-size:1em;
    font-weight:600;
    cursor:pointer;
`




//   return (
//     <AppWrap>
//       <Container>
//         <Title><Week>{params.week_arr}요일</Week> 평점 남기기</Title>
//         {/* 받아 온 week_arr 값? app.js에서 꼭 동적 라우팅해야 기능 연결됨 */}
//         <Cicles>
//           {Array.from({ length: 5 }, (item, idx) => {
//               return (
//                 <Circle
//                   key={idx}
//                   onClick={() => {
//                   setRate(idx + 1);
//                   }}
//                   // setRate로 idx값을 +1하게 해줌. 클릭할 때!!
//                   style={{
//                     backgroundColor: rate < idx+1 ? "#eee" : "slateblue",
//                   }}
//                 />
//               );
//           })}
//         </Cicles>
//         <Button onClick={() =>
//           history.push("/")}>평점 남기기</Button>
//       </Container>
//     </AppWrap>
//   );
// };


// const AppWrap = styled.div`
//   background-color: #eee;
//   height: 100vh;
//   width : 100vw;
//   display: inline-block;
// `;
// const Container = styled.div`
//   background-color: #fff;
//   width: 65vw;
//   max-width: 350px;
//   margin: 20px auto 20px;
//   height: 80vh;
//   padding: 35px 20px 35px 25px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
// `;
// const Week = styled.span`
//   color : #fff;
//   font-size: 20px;
//   background-color: slateblue;
//   padding : 7px;
//   border-radius: 7px;
// `;

// const Title = styled.p`
//   font-size: 20px;
//   font-weight: bold;
//   color: slateblue;
//   text-align: center;
// `;

// const Cicles = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Circle = styled.div`
//   width: 35px;
//   height: 35px;
//   border-radius: 35px;
//   border: 1px solid #eee;
//   margin-right: 5px;
//   cursor: pointer;
// `;

// const Button = styled.div`
//   color : #fff;
//   font-weight: bold;
//   text-align: center;
//   margin : 30px 0px;
//   padding : 10px;
//   background-color: slateblue;
//   border-color: slateblue;
//   border-radius: 10px;
//   cursor: pointer;
// `;

// export default Review;