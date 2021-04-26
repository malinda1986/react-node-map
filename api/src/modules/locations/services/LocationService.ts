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
    const { address, status } = filter;
    console.log(filter);
    if (status) {
      trucks = locations.filter((location) => status.includes(location.status));
    }
    if (address) {
      trucks = locations.filter((location) => location.id === address);
    }
    if (address && status) {
      trucks = locations.filter(
        (location) =>
          status.includes(location.status) && location.id === address
      );
    }
    return trucks;
  }
}
