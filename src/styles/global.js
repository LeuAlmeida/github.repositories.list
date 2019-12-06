import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

 * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
 }

 html, body, #root {
   min-height: 100%;
   font-family: Arial, Helvetica, sans-serif;
 }

 body {
  background: rgba(247,101,164,1);
  background: -moz-linear-gradient(-45deg, rgba(247,101,164,1) 0%, rgba(228,70,71,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(247,101,164,1)), color-stop(100%, rgba(228,70,71,1)));
  background: -webkit-linear-gradient(-45deg, rgba(247,101,164,1) 0%, rgba(228,70,71,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(247,101,164,1) 0%, rgba(228,70,71,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(247,101,164,1) 0%, rgba(228,70,71,1) 100%);
  background: linear-gradient(135deg, rgba(247,101,164,1) 0%, rgba(228,70,71,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f765a4', endColorstr='#e44647', GradientType=1 );
  -webkit-font-smoothing: antialiased !important;
 }

 body, input, button {
   color: #222;
   font-size: 14px;
   font-family: Arial, Helvetica, sans-serif,
 }

 button {
   cursor: pointer;
 }
`;
