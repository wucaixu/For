//main.js
import React from 'react';
import {render} from 'react-dom';
import Layout from './Layout'

import './main.css';//使用require导入css文件

render(
    <div>
         <Layout/>
    </div>
   , 
    document.getElementById('root'));