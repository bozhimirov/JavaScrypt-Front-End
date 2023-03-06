function roadRadar(speed, area) {
    let limitSpeed;
  
    switch (area) {
      case "motorway":
        limitSpeed = 130;
        break;
      case "interstate":
        limitSpeed = 90;
        break;
      case "city":
        limitSpeed = 50;
        break;
      case "residential":
        limitSpeed = 20;
        break;
    }
    let diff = speed - limitSpeed;
  
    let status;
    if (diff <= 0) {
      console.log(`Driving ${speed} km/h in a ${limitSpeed} zone`);
    } else {
      if (Math.abs(diff) <= 20) {
        status = "speeding";
      } else if (Math.abs(diff) <= 40) {
        status = "excessive speeding";
      } else {
        status = "reckless driving";
      }
      console.log(
        `The speed is ${Math.abs(diff)} km/h faster than the allowed speed of ${limitSpeed} - ${status}`
      );
    }
  }
  
  roadRadar(40, "city");
  roadRadar(21, "residential");
  roadRadar(120, "interstate");
  roadRadar(200, "motorway");