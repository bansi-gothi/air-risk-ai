from apscheduler.schedulers.background import BackgroundScheduler
from services.fetch_api import fetch_all_data

scheduler = BackgroundScheduler()
scheduler.add_job(fetch_all_data, 'cron', day=1, hour=0, minute=0)
scheduler.start()

# Run FastAPI normally with: uvicorn main:app --reload
