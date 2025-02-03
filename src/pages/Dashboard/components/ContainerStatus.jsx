import React from 'react';

const containerData = [
  ["01", "64123", "50.881899, 3.967258", "repairing", "€18,492.15"],
  ["02", "64124", "50.881500, 3.967300", "active", "€22,300.00"],
  ["03", "64125", "50.882000, 3.967500", "repairing", "€15,100.75"],
  ["04", "64126", "50.882200, 3.967700", "broken", "€19,800.90"],
  ["05", "64127", "50.882500, 3.967900", "active", "€25,000.50"]
];

const getStatusIcon = (status) => {
  switch(status) {
    case "repairing":
      return <span className="status-icon repairing"><span className="inner-circle"></span></span>;
    case "active":
      return <span className="status-icon active"><span className="inner-circle"></span></span>;
    case "broken":
      return <span className="status-icon broken"><span className="inner-circle"></span></span>;
    default:
      return null;
  }
};

const ContainerStatus = () => {
  return (
    <div className="container-status">
      <h2>Container Status</h2>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Serial No.</th>
            <th>Place</th>
            <th>Status</th>
            <th>Earning</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {containerData.map((data, index) => (
            <tr key={index}>
              {data.map((value, i) => {
                if (i === 3) {
                  // Статус с иконкой
                  return (
                    <td key={i}>
                      {getStatusIcon(value)} {value}
                    </td>
                  );
                } else {
                  return <td key={i}>{value}</td>;
                }
              })}
              <td><button>Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContainerStatus;
