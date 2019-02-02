import HandlerService from './handler.service';
import RoundService from './rounds.service';
import BucketService from './buckets.service';
import AllocationService from './allocations.service';

/**
 * Export singleton services
 */
export const services = {
    handler: HandlerService,
    rounds: RoundService,
    buckets: BucketService,
    allocations: AllocationService,
};
