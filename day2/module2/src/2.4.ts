{
  // generic with interface

  interface Developer<T, Y=null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: Y;
  }

  type RolexWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<RolexWatch> = {
    name: "limon",
    computer: {
      brand: "Asush",
      model: "E-50",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Rolex",
      model: "E--56",
      display: "emolate",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  type RoyalceBike = {
    brand: string;
    engineCapecity: string;
  };
  const reachDeveloper: Developer<AppleWatch, RoyalceBike> = {
    name: "Reach Dev",
    computer: {
      brand: "HP",
      model: "E-50",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Appler",
      model: "E--56",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Royalce",
      engineCapecity: "150mper",
    },
  };

  //
}
