import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';//导入
import {Button, Icon} from 'antd'

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}> //使用cssModule添加类名的方法
<<<<<<< HEAD
        {config.greetText} 
=======
         <Button type="primary"/>
         <Icon type="step-backward" />
        {config.greetText} 远端分支连接02--c5分支 c5完成--c6分支 c6完成---c6更改
>>>>>>> c6
      </div>
    );
  }
}

export default Greeter
