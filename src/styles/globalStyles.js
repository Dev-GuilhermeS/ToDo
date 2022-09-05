import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus{
    outline: 0;
}

body, button, input{
    font: 14px 'Roboto', sans-serif;
}
button{
    cursor: pointer;
}
`;