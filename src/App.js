import React, { Component } from 'react';
import Styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body{
    background-color: black;
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`
const AppContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .menu--dustu .menu__item {
    font-family: 'Work Sans', serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2em 0;
  }
  
  .menu--dustu .menu__item-name {
    font-size: 1.75em;
    font-weight: bold;
    overflow: hidden;
    padding: 0 0.25em;
    text-transform: uppercase;
    color: #fff;
  }
  
  .menu--dustu .menu__item-name::before,
  .menu--dustu .menu__item-name::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #eb2141;
    transform: translate3d(-100%,0,0) translate3d(-1px,0,0);
    transition: transform 0.7s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  }
  
  .menu--dustu .menu__item:hover .menu__item-name::before {
    transform: translate3d(100%,0,0) translate3d(1px,0,0);
  }
  
  .menu--dustu .menu__item:hover .menu__item-name::after {
    transform: translate3d(0,0,0);
  }
  
  .menu--dustu .menu__item-name::after {
    top: calc(50% - 2px);
    height: 4px;
  }
  
  .menu--dustu .menu__item-label {
    font-size: 1em;
    margin: 0.5em 0 0 0;
    margin-top: 0.25em;
    padding: 0.5em;
    color: #565656;
    transition: color 0.7s;
    transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  }
  
  .menu--dustu .menu__item:hover .menu__item-label {
    color: #fff;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  .menu {
    position: relative;
    z-index: 10;
  }
  
  .menu__item {
    line-height: 1;
    position: relative;
    display: block;
    margin: 1em 0;
    outline: none;
  }
  
  .menu__item-name,
  .menu__item-label {
    position: relative;
    display: inline-block;
  }
  
  .menu__item-name {
    font-size: 1.25em;
  }
  
  .menu__item-label {
    margin: 0 0 0 0.5em;
  }
  
`
class App extends Component {
  render() {
    return (
      <AppContainer>
        <nav class="menu menu--dustu">
          <a class="menu__item" href="#">
            <h1 className="menu__item-name">Welcome to React</h1>
            </a>
        </nav>
      </AppContainer>
    );
  }
}

export default App;
