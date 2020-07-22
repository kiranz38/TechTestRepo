import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Application} from './styles';
import PanelComponent from '../DisplayPanel';
import 'antd/dist/antd.css';
import '@progress/kendo-theme-default/dist/all.css';
import {NavbarComponent} from '../NavbarComponent'

const App = () => (
    <>
        <Application style={{backgroundColor:"white"}}>
           
            <NavbarComponent />
            <PanelComponent />
        </Application>
        <GlobalStyle />
    </>
);

export default hot(App);