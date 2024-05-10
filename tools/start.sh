#!/bin/bash

# Run Alembic migrations
echo "Show current Alembic version"
alembic current


# Run Alembic migrations
echo "Running Alembic migrations"
alembic upgrade head

# Start Uvicorn server
echo "Starting Uvicorn server"
uvicorn app.main:app --host 0.0.0.0 --port 8000
