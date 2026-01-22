import { Card, CardContent, Typography, Box } from "@mui/material";

const PollutionSummary = ({ data }) => {
  if (!data || !data.length) return null;

  return (
    <Box sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Recommendation
        </Typography>
      </Box>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {data.map((d, index) => (
          <Card
            key={index}
            elevation={3}
            sx={{
              flex: "1 1 280px",
              maxWidth: 350,
            }}
          >
            <CardContent>
              <Typography variant="body1" color="text.secondary">
                {d}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default PollutionSummary;
