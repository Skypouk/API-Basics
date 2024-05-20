pretty:
	ruff check --select I --fix .
	ruff format .

local-run:
	uvicorn app.main:app --reload

test:
	pytest tests/

check:
	ruff format .
	mypy .