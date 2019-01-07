# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.entity_allocation import EntityAllocation  # noqa: E501
from swagger_server.models.entity_allocation_response import EntityAllocationResponse  # noqa: E501
from swagger_server.models.entity_profile_allocation import EntityProfileAllocation  # noqa: E501
from swagger_server.models.entity_profile_allocation_response import EntityProfileAllocationResponse  # noqa: E501
from swagger_server.models.error import Error  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAllocationController(BaseTestCase):
    """AllocationController integration test stubs"""

    def test_event_id_allocations_entity_type_entity_id_post(self):
        """Test case for event_id_allocations_entity_type_entity_id_post

        Allocate for entity *entityId* of type *entityType* (camp/volunteer department/etc) *numAllocations*of type *allocType* for the specific event *eventId*
        """
        allocation = [EntityAllocation()]
        response = self.client.open(
            '/v1/tickets-allocation/{eventId}/allocations/{entityType}/{entityId}'.format(eventId='eventId_example', entityType='entityType_example', entityId='entityId_example'),
            method='POST',
            data=json.dumps(allocation),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_event_id_allocations_entity_type_entity_id_put(self):
        """Test case for event_id_allocations_entity_type_entity_id_put

        Adds an allocation of type *allocType* for profile *profileId* from entity *entityId* of type *entityType* (camp/volunteer department/etc)  for the specific event *eventId*
        """
        allocation = [EntityProfileAllocation()]
        response = self.client.open(
            '/v1/tickets-allocation/{eventId}/allocations/{entityType}/{entityId}'.format(eventId='eventId_example', entityType='entityType_example', entityId='entityId_example'),
            method='PUT',
            data=json.dumps(allocation),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
