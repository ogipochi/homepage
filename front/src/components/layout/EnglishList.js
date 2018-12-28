import React from "react";
import moment from "moment";

const EnglishList = props => {
  // HOMEに表示する
  return (
    <table className="table--EnglishList" border="1">
      <tr>
        <th>英文</th>
        <th>訳文</th>
        <th>単語</th>
        <th>登録日</th>
      </tr>
      {props.sentenceList.map(sentence => {
        return (
          <tr>
            <td>{sentence.content_eng}</td>
            <td>{sentence.content_jp}</td>
            <td>
              {sentence.vocabularies.map(voc => {
                return (
                  <React.Fragment>
                    <ul>
                      <li>
                        <div>{voc.content_eng}</div>
                        <div>{voc.content_jp}</div>
                      </li>
                    </ul>
                  </React.Fragment>
                );
              })}
            </td>

            <td>{moment(sentence.created).format("YYYY/MM/DD")}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default EnglishList;
