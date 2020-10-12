import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showTitle = () =>{
        alert('helloloolo')
    }


    showMess =(mess) => {
        alert(`hello ${mess}`);
    }




    render() {
        return (
            // xử lý skien truyền callback
            <div>
  <button onclick={this.showTitle
    }>Hello</button>


    {/* xử lý skien dung hàm trung gian */}
    <button onclick = {() =>{
        this.showTitle();
    }}>Show title</button>
    <br></br>
    <button onclick={this.showMess.bind(this, 'Kha')}>Show mess</button>

    <button onclick={() =>{
        this.showMess('Kha')
    }}>Show Mess</button>
</div>

        )
    }
}
