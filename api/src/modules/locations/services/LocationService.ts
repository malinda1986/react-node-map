import { Service, Container } from "typedi";
import fuzzSearch from "fuzzysort";
import LocationRepository from "../repository/LocationRepository";
import { IFilter, ITruck } from "../../types";

@Service()
export default class UserService {
  private location_repo: any;
  constructor() {
    this.location_repo = Container.get(LocationRepository);
  }

  public async filter(filter: IFilter): Promise<Array<ITruck>> {
    const locations = await this.location_repo.get();
    let trucks = locations;
    const { name, type } = filter;
    if (type) {
      trucks = locations.filter((location) => (location.status = type));
    }
    if (name) {
      trucks = fuzzSearch
        .go(name, locations, {
          keys: ["name", "foodItem"],
          // Create a custom combined score to sort by. -100 to the desc score makes it a worse match
          scoreFn: (a) =>
            Math.max(
              a[0] ? a[0].score : -1000,
              a[1] ? a[1].score - 100 : -1000
            ),
        })
        .map((search) => search.obj);
    }
    if (name && type) {
      trucks = locations.filter((location) => (location.status = type));
      trucks = fuzzSearch
        .go(name, locations, {
          keys: ["name", "foodItem"],
          // Create a custom combined score to sort by. -100 to the desc score makes it a worse match
          scoreFn: (a) =>
            Math.max(
              a[0] ? a[0].score : -1000,
              a[1] ? a[1].score - 100 : -1000
            ),
        })
        .map((search) => search.obj);
    }
    return trucks;
  }
}
