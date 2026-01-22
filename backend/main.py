from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from services.pollution_live import get_pollution_data
from pydantic import BaseModel


app = FastAPI(title="BudgetAdvisorAI Pollution Dashboard")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class City(BaseModel):
    city: str
    lat: float
    lng: float

@app.get("/")
def root():
    return {"status": "Pollution API running ✅"}

@app.post("/api/pollution")
def pollution_dashboard(city: City):
    return get_pollution_data(city)
