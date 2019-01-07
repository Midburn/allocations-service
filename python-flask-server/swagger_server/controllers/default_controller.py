import connexion
import six

from swagger_server.models.entity_profile_allocation import EntityProfileAllocation  # noqa: E501
from swagger_server.models.error import Error  # noqa: E501
from swagger_server import util


def event_id_allocations_entity_type_entity_id_get(eventId, entityType, entityId):  # noqa: E501
    """Get the allocations for entity *entityId* of type *entityType* (camp/volunteer department/etc) for the specific event *eventId* - Allocation - Event - Entity - Profile

     # noqa: E501

    :param eventId: The event id
    :type eventId: str
    :param entityType: the entity type - whether it&#39;s a camp, a volunteers department, etc
    :type entityType: str
    :param entityId: the entity id - the id/name of the camp, volunteers department, or any other entity that has tickets allocation
    :type entityId: str

    :rtype: List[EntityProfileAllocation]
    """
    return 'do some magic!'


def event_id_allocations_get(eventId, entityType=None, entityId=None, allocType=None):  # noqa: E501
    """Get all allocations for profile *profileId* [optional filters - from entity *entityId*, of type *entityType* (camp/volunteer department/etc), allocation of type *allocType*]  for the specific event *eventId* - Allocation - Event - Entity - Profile

     # noqa: E501

    :param eventId: The event id
    :type eventId: str
    :param entityType: the entity type - whether it&#39;s a camp, a volunteers department, etc
    :type entityType: str
    :param entityId: the entity id - the id/name of the camp, volunteers department, or any other entity that has tickets allocation
    :type entityId: str
    :param allocType: The allocation type - whether it&#39;s for appreciation, yearly volunteers, past participants, etc
    :type allocType: str

    :rtype: List[EntityProfileAllocation]
    """
    return 'do some magic!'
