FROM python:3.10

WORKDIR /src

COPY . /src

RUN pip install --no-cache-dir --upgrade -r /src/requirements.txt

CMD python -m uvicorn app.main:app --host 0.0.0.0 --port 8000