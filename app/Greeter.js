import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}> //使用cssModule添加类名的方法
        {config.greetText} 远端分支连接02--c5分支 c5完成--c6分支 c6完成
      </div>
    );
  }
}

export default Greeter
