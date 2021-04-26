import { JsonController, Get, QueryParam } from "routing-controllers";
import Joi from "joi";
import { Container } from "typedi";

import LocationService from "../services/LocationService";
import http from "../../../common/response";

/**
 * Location controller, handle in-coming user routes
 */

@JsonController()
export class LocationController {
  private location_service: LocationService;

  constructor() {
    this.location_service = Container.get(LocationService);
  }

  @Get("")
  async filter(
    @QueryParam("status") status: [string],
    @QueryParam("address") address: string
  ) {
    try {
      const filter = {
        address,
        status,
      };
      const schema = Joi.object({
        address: Joi.string(),
        status: Joi.array().items((Joi.string().valid("REQUESTED", "EXPIRED", "SUSPEND", "APPROVED")))
      });
      await schema.validateAsync(filter);
      const response = await this.location_service.filter(filter);
      return http.createResponse(response);
    } catch (e) {
      return {
        success: false,
        message: e.message,
      };
    }
  }
}
