FROM postgres:11.16

ENV POSTGRES_USER flexberryuser
ENV POSTGRES_PASSWORD jhv
ENV POSTGRES_DB appdb

COPY create_tables.sql /docker-entrypoint-initdb.d/