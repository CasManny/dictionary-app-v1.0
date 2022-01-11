import React from "react";
import "./definition.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReactAudioPlayer from "react-audio-player";

const Definitions = ({ word, meanings, category }) => {
  console.log(meanings);
  return (
    <div className="definition__container">
      {meanings[0] && word && category === "en" && (
        <ReactAudioPlayer
         className='definition__audio'
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        />
      )}
      {!word ? (
        <span className="definition__subtitle">
          Start by typing a word in Search
        </span>
      ) : (
        meanings.map((meaning) => {
          return meaning.meanings.map((item) =>
            item.definitions.map((def) => (
              <div className="definition__single__item">
                <b>
                  <ArrowRightAltIcon fontSize="small" /> {def.definition}
                </b>

                <br />
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    <p>{def.example}</p> <br />
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <strong>Synonyms: </strong> <br />
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          );
        })
      )}
    </div>
  );
};

export default Definitions;
