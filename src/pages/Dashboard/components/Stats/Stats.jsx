import React from "react";
import Kpi from "./Kpi/Kpi";
import Graphic from "./Graph/Graphic";
import graphImage from "../../../../images/graph.png";

const titles = [
  "Money spent",
  "Revenue",
  "Working containers",
  "KWh for spent money",
  "System efficiency",
  "Today KWh"
];

// Заглушка БД
const mockData = {
  day: [
    { text: "€1 234,56", image: graphImage },
    { text: "€2 345,67", image: graphImage },
    { text: "12", image: graphImage },
    { text: "23 456", image: graphImage },
    { text: "60%", image: graphImage },
    { text: "789", image: graphImage }
  ],
  week: [
    { text: "€8 765,43", image: graphImage },
    { text: "€12 345,67", image: graphImage },
    { text: "25", image: graphImage },
    { text: "150 000", image: graphImage },
    { text: "58%", image: graphImage },
    { text: "5 432", image: graphImage }
  ],
  month: [
    { text: "€40 876,54", image: graphImage },
    { text: "€55 678,90", image: graphImage },
    { text: "30", image: graphImage },
    { text: "500 000", image: graphImage },
    { text: "57%", image: graphImage },
    { text: "20 000", image: graphImage }
  ],
  year: [
    { text: "€500 000", image: graphImage },
    { text: "€700 000", image: graphImage },
    { text: "40", image: graphImage },
    { text: "2 000 000", image: graphImage },
    { text: "55%", image: graphImage },
    { text: "300 000", image: graphImage }
  ],
  "All time": [
    { text: "€5 000 000", image: graphImage },
    { text: "€7 500 000", image: graphImage },
    { text: "50", image: graphImage },
    { text: "10 000 000", image: graphImage },
    { text: "53%", image: graphImage },
    { text: "3 000 000", image: graphImage }
  ]
};

const Stats = ({ selectedTimeframe }) => {
  const filteredData = mockData[selectedTimeframe] || [];

  const kpiData = titles.map((title, index) => ({
    title,
    text: filteredData[index]?.text || "N/A",
    image: filteredData[index]?.image || graphImage
  }));

  return (
    <div className="stats-container">
      <div className="stats-left">
        <Kpi data={kpiData} />
      </div>
      <div className="stats-right">
        <Graphic />
      </div>
    </div>
  );
};

export default Stats;
