// import React from "react";
// import {Route} from "react-router-dom";
// import { useHistory, useParams } from "react-router-dom";
// import styled from "styled-components";

// const Home = (props) => {
//     const randomRange = (Math.random()*(5.01 - 1)) + 1;
//     const random = randomRange.toFixed(1);

//     const history = useHistory();
//     const week_arr = ["월", "화", "수", "목", "금", "토", "일"]

//     const star_gauge = week_arr.map((d, idx) => {
//         return {
//             day: d,
//             rate: Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1),
//         }
//     });

//     return  <Route path="/" exact>
//         <Title>내 일주일은?</Title>

//         {/* <DayBox>
//             <DayTit>월</DayTit>
//             <Star></Star>
//             <Arrow onClick={() => {
//                 history.push("/day/월");
//             }}>▶</Arrow>
//         </DayBox> */}

//         <div>
//             {star_gauge.map((d, idx) => {
//                 return (
//                     <div key={idx}>
//                         <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
//                             <h3 style={{ color: "dimgrey", marginRight: "15px" }}>{d.day}</h3>

//                             <StarBox>
//                                 {Array.from({ length: 5 }, (item, idx) => {
//                                 return (
//                                     <Star style={{
//                                     backgroundColor: d.rate < idx ? "#eee" : "coral",
//                                     }}
//                                     key={idx} />
//                                 );
//                                 })}
//                             </StarBox>

//                             <Arrow onClick={() => {
//                                 history.push(`/day/${d.day}`);
//                             }}/>
//                         </div>
//                     </div>
//                 );
//             })}
//         </div>

//         <div>
//             <strong>평균 평점</strong>
//             <p>{random}</p>
//             <button>Reset</button>
//         </div>
//     </Route>
// };


// const Title = styled.h1`
//   marginTop: 0;
//   fontSize: 1.6em;
// `

// const DayBox = styled.div`

// `

// const DayTit = styled.div`
//   display:inline-block;
//   vertical-align:middle;
// `

// const StarBox = styled.div`
//   display:flex;
// `

// const Star = styled.div`
//   display:inline-block;
//   width:36px;
//   height:36px;
//   margin:0 5px;
//   border-radius:50%;
//   background-color:coral;
//   vertical-align:middle;
// `

// const Arrow = styled.div`
//     appearance: none,
//     width: 0;
//     height: 0;
//     margin-left: 15px;
//     border-bottom: 16px solid transparent;
//     border-top: 16px solid transparent;
//     border-left: 24px solid darkblue;
//     cursor: pointer;
// `

// export default Home;














import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Home = (props) => {
    const history = useHistory();

    const day_text_dict = {
        0: "일",
        1: "월",
        2: "화",
        3: "수",
        4: "목",
        5: "금",
        6: "토",
    };

    const week_days = Object.keys(day_text_dict).map((_d, idx) => {
        let today = new Date().getDay();

        let d =
            today + parseInt(_d) > 6
                ? today + parseInt(_d) - 7
                : today + parseInt(_d);

        return day_text_dict[d];
    });

    let rate_sum = 0;

    const week_rates = week_days.map((w, idx) => {
        const random =
            Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
            Math.ceil(1);
        rate_sum += random;

        return {
            day: w,
            rate: random,
        };
    });

    const rate_avg = (rate_sum / week_rates.length).toFixed(1);
    const [avg, setAvg] = useState(rate_avg);




    return (
        <Route path="/" exact>
            <h3 style={{ textAlign: "center" }}>내 일주일은?</h3>

            {week_rates.map((w, idx) => {
                return (
                    <StarBox key={`week_day_${idx}`}>
                        <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
                            {w.day}
                        </p>

                        {Array.from({ length: 5 }, (item, idx) => {
                            return (
                                <div
                                    key={idx}
                                    style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        margin: "5px",
                                        backgroundColor: w.rate < idx ? "#eee" : "coral",
                                    }}
                                ></div>
                            );
                        })}

                        <Arrow onClick={() => {
                                history.push(`/day/${w.day}`);
                            }}
                        ></Arrow>
                    </StarBox>
                );
            })}
            <ResetBox>
                평균 평점 {avg}
                <ResetButton onClick={() => {
                        setAvg(parseInt(0).toFixed(1));
                    }}
                >
                    <p style={{ color: "white", fontSize: "18px" }}>Reset</p>
                </ResetButton>
            </ResetBox>
        </Route>
    );
};

const StarBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    width: 100%;
`

const Arrow = styled.div`
    appearance: none;
    background-color: transparent;
    border-color: purple;
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.6rem solid darkBlue;
    color: #fff;
    cursor: pointer;
`

const ResetBox = styled.div`
    width: 8rem;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 9px;
    font-size: 1.4em;
    font-weight: bold;
`

const ResetButton = styled.div`
    width: inherit;
    height: fit-content;
    background-color: darkBlue;
    border-radius: 6px;
    text-align: center;
    margin: 10px 0 0 0;
`

export default Home;