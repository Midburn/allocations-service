import connexion
import six

from swagger_server.models.entity_profile_allocation import EntityProfileAllocation  # noqa: E501
from swagger_server.models.entity_profile_allocation_response import EntityProfileAllocationResponse  # noqa: E501
from swagger_server.models.error import Error  # noqa: E501
from swagger_server import util


def event_id_allocations_entity_type_entity_id_put(eventId, entityType, entityId, allocation):  # noqa: E501
    """Adds an allocation of type *allocType* for profile *profileId* from entity *entityId* of type *entityType* (camp/volunteer department/etc)  for the specific event *eventId*

     # noqa: E501

    :param eventId: The event id
    :type eventId: str
    :param entityType: the entity type - whether it&#39;s a camp, a volunteers department, etc
    :type entityType: str
    :param entityId: the entity id - the id/name of the camp, volunteers department, or any other entity that has tickets allocation
    :type entityId: str
    :param allocation: The actual profile allocation.
    :type allocation: list | bytes

    :rtype: EntityProfileAllocationResponse
    """
    if connexion.request.is_json:
        allocation = [EntityProfileAllocation.from_dict(d) for d in connexion.request.get_json()]  # noqa: E501
    return 'do some magic!'
