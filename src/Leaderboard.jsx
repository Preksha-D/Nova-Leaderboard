import React from 'react';
import './App.css'; // Import custom CSS for styling

// Team Data as a sample array
const teams = [
    { id: 1, name: 'Team Alpha', icon: '🦅', score: 120 },
    { id: 2, name: 'Team Bravo', icon: '🐯', score: 110 },
    { id: 3, name: 'Team Charlie', icon: '🐺', score: 130 },
    { id: 4, name: 'Team Delta', icon: '🦁', score: 100 },
    { id: 5, name: 'Team Echo', icon: '🐻', score: 90 },
    { id: 6, name: 'Team Foxtrot', icon: '🐍', score: 80 },
    { id: 7, name: 'Team Golf', icon: '🦊', score: 85 },
    { id: 8, name: 'Team Hotel', icon: '🦉', score: 95 },
    { id: 9, name: 'Team India', icon: '🐘', score: 115 },
    { id: 10, name: 'Team Juliet', icon: '🦄', score: 125 },
    { id: 11, name: 'Team Kilo', icon: '🐉', score: 135 },
];

const Leaderboard = () => {
    return (
        <div className="leaderboard-container flex flex-col justify-center ">
            <h2 className="leaderboard-title">Leaderboard</h2>
            <div className="leaderboard">
                {teams.map((team) => (
                    <div key={team.id} className="w-full flex items-center">
                        <div className="team-icon">{team.icon}</div>
                        <div className="team-info">
                            <h3 className="team-name">{team.name}</h3>
                            <p className="team-score">Score: {team.score}</p>
                        </div>
                        <div className="team-rank">#{team.id}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;

