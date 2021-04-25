import { Service } from "typedi";

import location from "./location.json";
@Service()
export default class LocationRepository {
  private locations: any;

  constructor() {
    this.locations = location;
  }

  public async get() {
    return this.locations.data.map((each) => ({
      id: each[1],
      location: { lat: each[22], lng: each[23] },
      type: each[10],
      address: each[13],
      foodItem: each[19],
      name: each[9],
      status: each[18],
    }));
  }
}
