import React, { useState } from "react";

const FanPoll = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [pollData, setPollData] = useState([
    { id: 1, name: "Gojo (Jujutsu Kaisen)", votes: 42, color: "bg-blue-400" },
    { id: 2, name: "Ainz (Overlord)", votes: 28, color: "bg-purple-400" },
    { id: 3, name: "Makima (Chainsaw Man)", votes: 35, color: "bg-red-400" },
    {
      id: 4,
      name: "Eren Yeager (AOT Final Part)",
      votes: 51,
      color: "bg-green-400",
    },
  ]);

  const totalVotes = pollData.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (e) => {
    e.preventDefault();
    if (selectedOption) {
      const updatedPoll = pollData.map((option) =>
        option.id === selectedOption
          ? { ...option, votes: option.votes + 1 }
          : option
      );
      setPollData(updatedPoll);
      setHasVoted(true);
    }
  };

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-[#0f0b1f] rounded-2xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <span className="mr-2 text-pink-400">🔥</span> Fan Poll of the Week
        </h2>
        <span className="text-sm bg-pink-500/10 text-pink-300 px-3 py-1 rounded-full font-medium">
          {totalVotes} votes
        </span>
      </div>

      <div className="bg-[#1a1625] p-6 rounded-xl border border-[#2a2440] hover:border-pink-500/30 transition-all shadow-sm">
        {!hasVoted ? (
          <>
            <p className="mb-6 text-gray-300 text-lg font-medium">
              Who's the most OP anime villain this season? 🤔
            </p>
            <form onSubmit={handleVote} className="space-y-4">
              {pollData.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedOption === option.id
                      ? "bg-[#2a2440] ring-2 ring-pink-500/80"
                      : "bg-[#252239] hover:bg-[#2a2440]/80"
                  }`}
                  onClick={() => handleOptionChange(option.id)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedOption === option.id
                          ? "border-pink-500 bg-pink-500"
                          : "border-gray-500"
                      }`}
                    >
                      {selectedOption === option.id && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <label className="ml-3 font-medium text-gray-100 cursor-pointer">
                      {option.name}
                    </label>
                  </div>
                </div>
              ))}
              <button
                type="submit"
                disabled={!selectedOption}
                className={`mt-6 w-full py-3 rounded-xl font-medium transition-all ${
                  selectedOption
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-pink-500/20"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                } text-white`}
              >
                🗳️ Submit Vote
              </button>
            </form>
          </>
        ) : (
          <div className="space-y-6">
            <div>
              <p className="text-lg font-medium text-white">
                Thanks for voting! Here's the results ☕
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Total votes: {totalVotes}
              </p>
            </div>
            <div className="space-y-4">
              {pollData.map((option) => {
                const percentage =
                  totalVotes > 0
                    ? Math.round((option.votes / totalVotes) * 100)
                    : 0;

                return (
                  <div key={option.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-100">
                        {option.name}
                      </span>
                      <span className="text-gray-300">
                        {percentage}% ({option.votes})
                      </span>
                    </div>
                    <div className="w-full bg-[#252239] rounded-full h-3">
                      <div
                        className={`${option.color} h-3 rounded-full flex items-center justify-end`}
                        style={{ width: `${percentage}%` }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full opacity-80 mr-1"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pt-4 border-t border-[#2a2440] flex justify-end">
              <button
                onClick={() => setHasVoted(false)}
                className="text-pink-400 hover:text-pink-300 text-sm font-medium flex items-center"
              >
                Vote again
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FanPoll;
