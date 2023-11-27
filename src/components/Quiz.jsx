import React from "react";
import './all.css'

class Quiz extends React.Component {


    render() {
        return (
            <>
                <div className="cont">
                    <h1 className="qu">Questions</h1>
                    <p className="que">1 of 15</p>
                    <h5>Which is the only mammal that can jump?</h5>
                    <div className="opt">
                        <div className="choice">Dog</div>
                        <div className="choice">Elephant</div>
                        <div className="choice">Goat</div>
                        <div className="choice">Lion</div>
                    </div>
                    <div className="work">
                        <button className="prev">Previous</button>
                        <button className="nxt">Next</button>
                        <button className="qut">Quit</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Quiz