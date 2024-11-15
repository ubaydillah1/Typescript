interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `${this.name} is vehicle`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`name : ${vehicle.name}`);
  console.log(`year : ${vehicle.year}`);
  console.log(`is Broken? : ${vehicle.broken}`);
};

printVehicle(oldCivic);
