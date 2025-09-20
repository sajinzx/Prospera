import React from "react";
import "./home.css";

const Home = () => {
    const data = {
    monthlyIncome: 50000,
    financialGoal: "Buy a House",
    timePeriod: 10,
    riskLevel: "Medium",
    largeCap: 40,
    midCap: 30,
    smallCap: 20,
    fixedDeposit: 10,
  };
  const { monthlyIncome, financialGoal, timePeriod, riskLevel, largeCap, midCap, smallCap, fixedDeposit } = data;

  const scenarios = [
    {
      title: "Chosen Risk Level",
      timePeriod: timePeriod,
      largeCap: largeCap,
      midCap: midCap,
      smallCap: smallCap,
      fd: fixedDeposit,
      color: "#f0f0ff",
    },
    {
      title: "Lower Risk Scenario",
      timePeriod: timePeriod + 3,
      largeCap: 60,
      midCap: 25,
      smallCap: 10,
      fd: 5,
      color: "#e6f2ff",
    },
    {
      title: "Higher Risk Scenario",
      timePeriod: Math.max(1, timePeriod - 2),
      largeCap: 25,
      midCap: 30,
      smallCap: 40,
      fd: 5,
      color: "#ffe6e6",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="text">Financial Dashboard</div>
        <div className="underline"></div>
      </div>

      {scenarios.map((s, idx) => (
        <div className="scenario-section" key={idx} style={{ background: s.color }}>
          <div className="scenario-title">{s.title}</div>
          <div className="cards-flex">
            <div className="result-card">
              <div className="result-label">Monthly Income</div>
              <div className="result-value">₹ {monthlyIncome}</div>
            </div>
            <div className="result-card">
              <div className="result-label">Financial Goal</div>
              <div className="result-value">{financialGoal}</div>
            </div>
            <div className="result-card">
              <div className="result-label">Time Period</div>
              <div className="result-value">{s.timePeriod} yrs</div>
            </div>
            <div className="result-card allocation-card">
              <div className="result-label">Allocation</div>
              <div className="allocation-flex full-width">
                <div className="allocation-box large">Large {s.largeCap}%</div>
                <div className="allocation-box mid">Mid {s.midCap}%</div>
                <div className="allocation-box small">Small {s.smallCap}%</div>
                <div className="allocation-box fd">FD {s.fd}%</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;