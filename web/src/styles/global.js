import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html{
  font-size: 10px;

  @media (min-width: 750px) {
    font-size: 16px;
  }
}

body{
  -webkit-font-smoothing: antialiased;


}

body, input, button{
  font-family: 'ABeeZee', serif;
  font-size: 16px;
}
h1,h2,h3,h4,h5,h6,strong{
  font-weight: 500;
}
button{
  cursor: pointer;
}


`;
