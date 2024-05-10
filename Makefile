pretty:
	ruff check --select I --fix app/
	ruff format app/

local-run:
	uvicorn app.main:app --reload

test:
	pytest tests/