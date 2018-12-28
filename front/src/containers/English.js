import React,{Component} from "react";
import ImgHead from "../components/widget/ImgHead"
import {fetchSentenceList} from "../actions/api_english";
import { connect } from "react-redux";
import moment from "moment";
import EnglishList from "../components/layout/EnglishList";
import EnglishExplanation from "../components/layout/EnglishExplanation";

class English extends Component{
    componentWillMount(){
        this.props.fetchSentenceList();
    }
    render(){
        return(
            <div className="area--English">
                <ImgHead src="img_english.jpg" title="English"/>
                <div className="">
                    <EnglishExplanation/>
                </div>
                <div className="area-table--English">
                    <EnglishList sentenceList={this.props.sentenceList}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>(
    {
        sentenceList:state.english.sentenceList,
    }
)

export default connect(
    mapStateToProps,
    {fetchSentenceList}
)(English);