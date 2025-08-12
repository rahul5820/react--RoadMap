import React, { useState, useEffect } from "react";

const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);

const Tracker = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("beastTrackerData");
    return saved ? JSON.parse(saved) : days.map(() => ({ beast: false, workout: false, food: false }));
  });

  useEffect(() => {
    localStorage.setItem("beastTrackerData", JSON.stringify(data));
  }, [data]);

  const toggle = (index, key) => {
    const newData = [...data];
    newData[index][key] = !newData[index][key];
    setData(newData);
  };

  const totalChecks = data.reduce((acc, curr) => acc + (curr.beast ? 1 : 0) + (curr.workout ? 1 : 0) + (curr.food ? 1 : 0), 0);
  const maxChecks = data.length * 3;
  const progress = Math.round((totalChecks / maxChecks) * 100);

  // Inline styles
  const containerStyle = {
    padding: '16px',
    maxWidth: '960px',
    margin: '0 auto',
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center',
  };

  const progressBarContainerStyle = {
    width: '100%',
    height: '24px',
    backgroundColor: '#E0E0E0',
    borderRadius: '9999px',
    marginBottom: '24px',
  };

  const progressBarStyle = {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: '9999px',
    color: '#fff',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${progress}%`,
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '16px',
    overflow: 'hidden',
  };

  const thStyle = {
    padding: '8px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  };

  const tdStyle = {
    padding: '8px',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const dayCellStyle = {
    fontWeight: '600',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>💪 Beast Control Tracker (30 Days)</h1>

      <div style={progressBarContainerStyle}>
        <div style={progressBarStyle}>
          {progress}% Complete
        </div>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Day</th>
            <th style={thStyle}>Phone Control</th>
            <th style={thStyle}>Workout</th>
            <th style={thStyle}>Healthy Food</th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, i) => (
            <tr key={i} style={{ borderTop: '1px solid #ddd' }}>
              <td style={{ ...tdStyle, ...dayCellStyle }}>{day}</td>
              {["beast", "workout", "food"].map((key) => (
                <td
                  key={key}
                  style={{
                    ...tdStyle,
                    backgroundColor: data[i][key] ? '#4CAF50' : '#FFCDD2',
                  }}
                  onClick={() => toggle(i, key)}
                >
                  {data[i][key] ? "✅" : "❌"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tracker;
