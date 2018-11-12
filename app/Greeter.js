import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';//导入
import {Button, Icon} from 'antd'

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}> 
         <Button type="primary"/>
         <Icon type="step-backward" />
        {config.greetText} 
      </div>
    );
  }
}

export default Greeter
