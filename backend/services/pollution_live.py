from pydantic import BaseModel
import requests


class City(BaseModel):
    city: str
    lat: float
    lng: float

def get_pollution_data(city_obj):
    BASE_URL = "https://air-quality-api.open-meteo.com/v1/air-quality"


    try:
        res = requests.get(
            BASE_URL,
            params={
                "latitude": city_obj.lat,
                "longitude": city_obj.lng,
                "hourly": "pm2_5,pm10,carbon_monoxide,nitrogen_dioxide,ozone,sulphur_dioxide",
                "timezone": "auto"
            },
            timeout=30
        )
        res.raise_for_status()
        data = res.json()
    except Exception as e:
        return {"city": city_obj.city, "error": f"Failed to fetch data: {str(e)}"}

    # Compute daily averages
    hourly = data.get("hourly", {})
    avg = lambda arr: round(sum(arr)/len(arr), 2) if arr else None

    avg_pm2_5 = avg(hourly.get("pm2_5", []))
    avg_pm10 = avg(hourly.get("pm10", []))
    avg_no2 = avg(hourly.get("nitrogen_dioxide", []))
    avg_o3 = avg(hourly.get("ozone", []))
    avg_so2 = avg(hourly.get("sulphur_dioxide", []))
    avg_co = avg(hourly.get("carbon_monoxide", []))

    # Risk score
    risk_score = 0
    if avg_pm2_5: risk_score += 0.45 * avg_pm2_5
    if avg_pm10: risk_score += 0.20 * avg_pm10
    if avg_no2: risk_score += 0.15 * avg_no2
    if avg_o3: risk_score += 0.10 * avg_o3
    if avg_so2: risk_score += 0.05 * avg_so2
    if avg_co: risk_score += 0.05 * avg_co

    # Risk category
    if risk_score < 15:
        category = "Safe"
    elif risk_score < 30:
        category = "Moderate"
    elif risk_score < 50:
        category = "Risk"
    else:
        category = "High Risk ↑"

    # Recommendations
    recs = []
    if category in ["Risk", "High Risk ↑"]:
        recs.extend([
            "Prefer public transport / carpool / cycle",
            "Avoid open burning of waste",
            "Plant more trees and improve green cover",
            "Use masks (N95) if outdoors",
            "Industry: upgrade filters & monitor emissions"
        ])

    return {
        "city": city_obj.city,
        "lat": city_obj.lat,
        "lng": city_obj.lng,
        "avg_pm2_5": avg_pm2_5,
        "avg_pm10": avg_pm10,
        "avg_no2": avg_no2,
        "avg_o3": avg_o3,
        "avg_so2": avg_so2,
        "avg_co": avg_co,
        "risk_score": round(risk_score, 2),
        "category": category,
        "recommendations": recs
    }