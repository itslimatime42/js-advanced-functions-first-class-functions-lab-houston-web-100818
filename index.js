const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function(int) {
  return function(fare) {
    return fare * int
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (drivers, driverFunction) {
  return driverFunction(drivers)
}
