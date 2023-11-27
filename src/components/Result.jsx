import React from "react";
import './all.css'

class Result extends React.Component {


    render() {
        return (
            <>
                <h2 className="h">Result</h2>
                <div className="result">
                    <p className="headings"><b>You need more practise!</b></p>
                    <p className="headingss">Your score is 20%</p>
                    <div className="content">
                        <p className="info"> Total no. of questions </p>
                        <p className="infoo"><b>15</b></p>
                        <p className="info"> Number of attempted questions </p>
                        <p className="infoo"><b>9</b></p>
                        <p className="info"> Number of correct answers </p>
                        <p className="infoo"><b>3</b></p>
                        <p className="info"> Number of wrong answers </p>
                        <p className="infoo"><b>6</b></p>
                    </div>
                    <div className="btn">
                        <button className="home">Play Again</button>
                        <button className="home">Back to home</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Result