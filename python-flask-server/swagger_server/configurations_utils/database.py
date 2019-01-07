import os

DATABASE_HOST = os.getenv("DATABASE_HOST", "localhost")
DATABASE_NAME = os.getenv("DATABASE_NAME", "allocation_service")
DATABASE_USER = os.getenv("DATABASE_USER", "postgress")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
DATABASE_PORT = os.getenv("DATABASE_PORT", 5432)


def get_db_dsn():
    return "host={dbhost} dbname={dbname} user={dbuser} password={dbpassword} port={dbport}". \
        format(dbhost=DATABASE_HOST,
               dbname=DATABASE_NAME,
               dbuser=DATABASE_USER,
               dbpassword=DATABASE_PASSWORD,
               dbport=DATABASE_PORT)