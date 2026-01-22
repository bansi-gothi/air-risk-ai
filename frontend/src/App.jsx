import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import PollutionSummary from "./components/SummaryCards";
import PollutionChart from "./components/ChartsSection";
import TopHeaderWithFilter from "./components/TopHeaderWithFilter";
import { getPollutionRecommandation } from "./services/api";

function App() {
  const [selectedCity, setSelectedCity] = useState({
    city: "Ahmedabad",
    lat: 23.0225,
    lng: 72.5714,
  });
  const [pollutionData, setPollutionData] = useState([]);

  useEffect(() => {
    getPollutionRecommandation(selectedCity)
      .then((res) => setPollutionData(res || []))
      .catch((err) => console.error(err));
  }, [selectedCity]);

  const pollutionStataticsData = {
    avg_co: pollutionData.avg_co,
    avg_no2: pollutionData.avg_no2,
    avg_o3: pollutionData.avg_o3,
    avg_pm2_5: pollutionData.avg_pm2_5,
    avg_pm10: pollutionData.avg_pm10,
    avg_so2: pollutionData.avg_so2,
    category: pollutionData.category,
  };

  return (
    <Box>
      <TopHeaderWithFilter
        rWithFilter
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <Box p={2}>
        <PollutionChart data={pollutionStataticsData} />
        <PollutionSummary data={pollutionData.recommendations} />
      </Box>
    </Box>
  );
}

export default App;
