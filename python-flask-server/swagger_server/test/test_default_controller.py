# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.entity_profile_allocation import EntityProfileAllocation  # noqa: E501
from swagger_server.models.error import Error  # noqa: E501
from swagger_server.test import BaseTestCase


class TestDefaultController(BaseTestCase):
    """DefaultController integration test stubs"""

    def test_event_id_allocations_entity_type_entity_id_get(self):
        """Test case for event_id_allocations_entity_type_entity_id_get

        Get the allocations for entity *entityId* of type *entityType* (camp/volunteer department/etc) for the specific event *eventId* - Allocation - Event - Entity - Profile
        """
        response = self.client.open(
            '/v1/tickets-allocation/{eventId}/allocations/{entityType}/{entityId}'.format(eventId='eventId_example', entityType='entityType_example', entityId='entityId_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_id_allocations_get(self):
        """Test case for event_id_allocations_get

        Get all allocations for profile *profileId* [optional filters - from entity *entityId*, of type *entityType* (camp/volunteer department/etc), allocation of type *allocType*]  for the specific event *eventId* - Allocation - Event - Entity - Profile
        """
        query_string = [('entityType', 'entityType_example'),
                        ('entityId', 'entityId_example'),
                        ('allocType', 'allocType_example')]
        response = self.client.open(
            '/v1/tickets-allocation/{eventId}/allocations'.format(eventId='eventId_example'),
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
