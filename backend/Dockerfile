FROM python:3.11-alpine
LABEL maintainer="hamdiozdemir.tech"

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /tmp/requirements.txt
COPY ./requirements.dev.txt /tmp/requirements.dev.txt
COPY ./scripts /scripts
COPY ./scripts/run.sh /scripts/run.sh
RUN true
COPY . /app

WORKDIR /app
EXPOSE 8000

ARG DEV=true

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip

RUN apk add --update --no-cache postgresql-client jpeg-dev && \
    apk add --update --no-cache --virtual .tmp-build-deps \
        build-base postgresql-dev musl-dev zlib zlib-dev linux-headers

RUN /py/bin/pip install -r requirements.txt && \
    if [ $DEV='true' ]; \
        then /py/bin/pip install -r requirements.dev.txt ; \
    fi
RUN rm -rf /tmp && \
    apk del .tmp-build-deps

RUN addgroup -S owner-group && \
    adduser -S -G owner-group hamdi

RUN mkdir -p /vol/web/media && \
    mkdir -p /vol/web/static

RUN chown -R hamdi:owner-group /vol && \
    chmod -R 755 /vol && \
    chmod -R +x /scripts/run.sh

ENV PATH="/scripts:/py/bin:$PATH"
USER hamdi

CMD ["scripts/run.sh"]
