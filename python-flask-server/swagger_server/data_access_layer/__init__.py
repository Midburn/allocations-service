from typing import List, Dict

import psycopg2
from configurations_utils.database import get_db_dsn
conn = None


def is_connected(connection) -> bool:
    try:
        dummy_query_response = query(sql_text='select 1 as dummy',
                                     fetch_single_row=True,
                                     connection=connection)
        return dummy_query_response is not None
    except (Exception, psycopg2.DatabaseError):
        return False


def _create_connection():
    local_conn = psycopg2.connect(get_db_dsn())
    if is_connected(connection=local_conn):
        return local_conn
    else:
        return None


def get_connection(shared: bool = False):
    if not shared:
        return _create_connection()
    global conn
    if conn is None:
        conn = _create_connection()
    return conn


def query(sql_text: str, fetch_single_row: bool = False, connection=None) -> List[Dict]:
    try:
        if sql_text is None or not sql_text.strip():
            print("Sql text is empty (='{})".format(sql_text))
            return None
        if connection is None:
            connection = get_connection(shared=True)
        cursor = connection.cursor()
        cursor.execute(sql_text)
        column_names=[col.name for col in cursor.description]
        if fetch_single_row:
            response = [cursor.fetchone()]
        else:
            response = cursor.fetchall()
        return convert_query_response_to_list_dicts(column_names=column_names,
                                                    query_response=response)
    except (Exception, psycopg2.DatabaseError) as error:
        print("Failed running sql '{}' with error {}".format(sql_text, error))
        return None


def convert_query_response_to_list_dicts(column_names, query_response)->List[Dict]:
    return [dict(zip(column_names, row)) for row in query_response]


# if __name__ == '__main__':
#     query("select 1 as a, 2 as b union select 2 as a, 4 as b", False)
