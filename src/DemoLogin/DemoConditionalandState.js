import React, { Component } from 'react'

export default class DemoConditionalandState extends Component {
    // isLogin là thuộc tính của class
    // true: đã login => hiện tên người dùng
    // false: chưa login => hiện nút login
    // stage là tt của component
    
    state = {
        isLogin : false,
    };
    // isLogin - false => cách này sai vì render không chạy lại
    
    // phương thức của class
    handleLogin = () => {
        console.log("run");
        // cách này sai vi render không chạy lại
        this.setState ({
            isLogin: true,
        })
        // this.state.isLogin true;

    }
    renderLogin =() =>{
        if(this.state.isLogin){
            // hiện tên người dùng
            return <p>KHAJKHDJK</p>
        } else{
            return <button onClick={this.handleLogin}>Login</button>
        }
    }
    // render là pthuc cap nhat lai giao diện
    render() {
        console.log('run render');
        return (
            <div>
                <h2>DemoConditionalandState</h2>
                {
                    this.renderLogin()
                }
            </div>
        );
    }
}
