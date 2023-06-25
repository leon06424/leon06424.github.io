const quotes = [
    {
        quote: "굳은 결심은 가장 유용한 지식이다.",
        author: "나폴레옹",
    },
    {
        quote: "성공을 확신하는 것이 성공의 첫걸음이다.",
        author: "로버트 슐러",
    },
    {
        quote: "사람은 스스로 운명을 만든다.",
        author: "세네카",
    },
    {
        quote: "일을 하는데 있어서 언제 시작할까 생각하는 것은 그만큼 때를 늦추는 것이다.",
        author: "칼라일",
    },
    {
        quote: "사람에게 필요한 것은 행동이다.",
        author: "브론테",
    },
    {
        quote: "책 없는 방은 영혼 없는 육체와 같다. ",
        author: "키케로",
    },
    {
        quote: "시간이 흘러가 버리지만 한번 입 밖에 낸 말은 그대로 남는다.",
        author: "톨스토이",
    },
    {
        quote: "당사자가 둘이 있을때 한쪽 말만 듣는 사람은 반쪽만 들은 것이다.",
        author: "아이스킬로스",
    },
    {
        quote: "오늘 할 수 있는 일에 최선을 다해라.",
        author: "뉴턴",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;