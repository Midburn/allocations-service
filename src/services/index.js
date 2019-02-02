import { HandlerService } from './handler.service';
import { RoundsService } from './rounds.service';

/**
 * Export singleton services
 */
export const services = {
    handler: new HandlerService(),
    rounds: new RoundsService()
};
