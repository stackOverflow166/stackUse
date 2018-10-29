import * as React from "react";
import "./LeaderboardBar.scss";
import Trophy from './icon_tournament.svg'

// export interface Props
// {
//     display: boolean
// }
//
// export interface State
// {
//
// }

export class LeaderboardBar extends React.Component{
    render()
    {
        return (
            <div id="leaderboard-bar">
                <div>
                    <p id="leaderboard-bar-text">Raging Rex Tournament</p>
                </div>
                <div id="rank-text">
                    <p id="leaderboard-bar-text">Your Rank  <span id="gold-text">77/542</span></p>
                </div>
                <div id="score-text">
                    <p id="leaderboard-bar-text">Score <span id="gold-text">54</span></p>
                </div>
                <div id="terms-text">
                    <p id="leaderboard-bar-text">Terms & Info</p>
                </div>
            </div>
        )
    }
}
