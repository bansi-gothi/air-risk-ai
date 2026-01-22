import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

const PollutionPieChart = ({ data }) => {
  if (!data) return null;

  const chartData = [
    { name: "CO", value: data.avg_co },
    { name: "NO2", value: data.avg_no2 },
    { name: "O3", value: data.avg_o3 },
    { name: "PM2.5", value: data.avg_pm2_5 },
    { name: "PM10", value: data.avg_pm10 },
    { name: "SO2", value: data.avg_so2 },
  ];

  return (
    <div
      style={{ textAlign: "center", margin: "0 auto", maxWidth: 400, mt: 2 }}
    >
      <h3>Pollution Levels ({data.category})</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default PollutionPieChart;
