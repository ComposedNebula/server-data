const Delay = (ms) => new Promise((res) => setTimeout(res, ms));

const locations = [
  {
    name: "Diamond Casino",
    cmdName: "casino",
    desc: "The Diamond Casino and Resort",
    coords: {
      x: 925.783,
      y: 46.165,
      z: 80.906,
    },
  },

  {
    name: "Mission Row PD",
    desc: "LSPD Headquarters",
    coords: {
      x: 427.719,
      y: -976.66,
      z: 30.709,
    },
  },

  {
    name: "FIB",
    desc: "FIB Building",
    coords: {
      x: 76.661,
      y: 740.2,
      z: 45.097,
    },
  },
  {
    name: "Paleto Bay",
    desc: "Paleto Bank",
    coords: {
      x: -116.014,
      y: 6457.59,
      z: 31.466,
    },
  },
];

RegisterCommand(
  "tp_saved",
  async (_, args) => {
    const ped = PlayerPedId();
    const pedVehicle = GetVehiclePedIsIn(ped, false);
    let isInVehicle = false;
    let desLocation = 0;

    if (pedVehicle !== null) {
      isInVehicle = true;
    }

    switch (args[0]) {
      case "casino":
        desLocation = 0;
        break;
      case "mrpd":
        desLocation = 1;
        break;
      case "fib":
        desLocation = 2;
        break;
      case "paleto":
        desLocation = 3;
    }

    console.log(ped);
    // if(rawArgInput === 'casino'){
    //     desLocation = [0]
    // } else if(rawArgInput === 'fib'){
    //     desLocation = [2]
    // } else if(rawArgInput === 'mrpd'){
    //     desLocation = [1]
    // }
    const desLocationCoords = locations[desLocation].coords;
    console.log(desLocationCoords);

    SetEntityCoords(
      ped,
      desLocationCoords.x,
      desLocationCoords.y,
      desLocationCoords.z,
      true,
      true,
      false,
      false
    );
    if (isInVehicle) {
      SetEntityCoords(
        pedVehicle,
        desLocationCoords.x,
        desLocationCoords.y,
        desLocationCoords.z,
        true,
        true,
        false,
        false
      );
      await Delay(100);
      SetPedIntoVehicle(ped, pedVehicle, -1);
    }
  },
  false
);

RegisterCommand(
  "tp_coords",
  async (source, args) => {
    const ped = PlayerPedId();
    const pedVehicle = GetVehiclePedIsIn(ped, false);
    let isInVehicle = false;
    if (pedVehicle !== null || 0) {
      isInVehicle = true;
    }
    const desLocationCoords = [
      parseFloat(args[0]),
      parseFloat(args[1]),
      parseFloat(args[2]),
    ];
    console.log(desLocationCoords);

    SetEntityCoords(
      ped,
      desLocationCoords[0],
      desLocationCoords[1],
      desLocationCoords[2],
      true,
      true,
      false,
      false
    );
    if (isInVehicle) {
      SetEntityCoords(
        pedVehicle,
        desLocationCoords[0],
        desLocationCoords[1],
        desLocationCoords[2],
        true,
        true,
        false,
        false
      );
      await Delay(100);
      SetPedIntoVehicle(ped, pedVehicle, -1);
    }
  },
  false
);
