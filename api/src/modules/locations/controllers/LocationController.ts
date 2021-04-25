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
    @QueryParam("type") type: string,
    @QueryParam("name") name: string
  ) {
    try {
      const filter = {
        name,
        type,
      };
      const schema = Joi.object({
        name: Joi.string(),
        type: Joi.string().valid("approved", "request", "suspended", "expired"),
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
