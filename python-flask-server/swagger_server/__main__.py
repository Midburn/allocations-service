#!/usr/bin/env python3

import connexion

from swagger_server import encoder


def main():
    app = connexion.App(__name__, specification_dir='./swagger/')
    app.app.json_encoder = encoder.JSONEncoder
    app.add_api('v1/swagger.yaml', arguments={'title': 'Midburn IL ticket allocation service API - v1'})
    app.run(port=8080)


if __name__ == '__main__':
    main()
