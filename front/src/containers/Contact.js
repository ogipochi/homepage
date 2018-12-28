import React , {Component} from "react";



class Contact extends Component {
    render(){
        return(
            <div className="area--Contact">
                <form>
                    <label>お名前</label>
                    <input/>
                    <label>メールアドレス</label>
                    <input/>
                    <label>内容</label>
                    <textarea/>
                    <button>送信</button>
                </form>
            </div>
        )
    }
}

export default Contact;