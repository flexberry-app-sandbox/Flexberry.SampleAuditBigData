FROM flexberry/clickhouse-official:20.12

COPY config.xml /etc/clickhouse-server/config.xml
COPY users.xml /etc/clickhouse-server/users.xml
COPY CreateAuditTables.sql /var/clickhouse/schema/CreateAuditTables.sql

#После запускаконтейнера надо в него зайти и выполнить эту команду вручную, т.к пока через докер не выходит создать таблицы
#CMD clickhouse-client --host clickhouse-db --user default --password P@ssw0rd --multiquery < /var/clickhouse/schema/CreateAuditTables.sql
