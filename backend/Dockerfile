FROM python:3.7.4-alpine3.10

WORKDIR /backend
COPY requirements.txt /backend/

RUN set -ex \
    && python -m pip install --upgrade pip \
    && pip install -r requirements.txt


COPY /backend/.env /backend/backend/.env

COPY . /backend/
EXPOSE 8000
RUN python manage.py makemigrations
RUN python manage.py migrate

CMD ["gunicorn", "--bind", ":8000", "--workers", "3", "backend.wsgi:application"]