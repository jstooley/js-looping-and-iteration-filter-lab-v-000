function findMatching(drivers, args){
  let match = []
  for (const driver of drivers){
    const areEqual = (driver.toUpperCase() === args.toUpperCase())
    if (areEqual)[
      match.push(driver)
    ];
  };
return match;
};

function fuzzyMatch(drivers, args){
  drivers.filter(function (driver){
    return driver.slice(0,1) === args.slice(0,1)};
  );
};
