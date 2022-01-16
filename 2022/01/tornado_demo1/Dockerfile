FROM python:3.8-slim-buster
COPY ./src /app
COPY ./requirements.txt /app/requirements.txt
WORKDIR /app
RUN python3 -m pip install -r /app/requirements.txt
CMD [ "python3", "/app/server.py" ]
