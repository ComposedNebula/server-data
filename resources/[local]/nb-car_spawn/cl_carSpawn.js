const Delay = (ms) => new Promise((res) => setTimeout(res, ms));

RegisterCommand(
  "spawncar",
  async (source, args, raw) => {
    let model = "adder";
    if (args.length > 0) {
      model = args[0].toString();
    }

    const hash = GetHashKey(model);
    if (!IsModelInCdimage(hash) || !IsModelAVehicle(hash)) {
      emit("chat:addMessage", {
        args: ["Model is not a valid vehicle model"],
      });
      return;
    }

    RequestModel(hash);
    while (!HasModelLoaded(hash)) {
      await Delay(500);
    }

    const ped = PlayerPedId();

    const coords = GetEntityCoords(ped);

    const currentVehicle = GetVehiclePedIsIn(ped, false);
    if (currentVehicle !== 0) {
      SetEntityAsMissionEntity(currentVehicle, true, true);
      DeleteVehicle(currentVehicle);
    }

    const vehicle = CreateVehicle(
      hash,
      coords[0],
      coords[1],
      coords[2],
      GetEntityHeading(ped),
      true,
      false
    );

    SetPedIntoVehicle(ped, vehicle, -1);

    SetEntityAsNoLongerNeeded(vehicle);
    SetModelAsNoLongerNeeded(model);

    emit("chat:addMessage", {
      args: [`Vehicle ${model} spawned`],
    });
  },
  false
);

RegisterCommand(
  "vhealth",
  () => {
    const ped = PlayerPedId();
    const pedVehicle = GetVehiclePedIsIn(ped, false);

    const vhealth = GetVehicleEngineHealth(pedVehicle);
    return console.log(vhealth);
  },
  false
);

RegisterCommand(
  "fix",
  () => {
    const ped = PlayerPedId();
    const pedVehicle = GetVehiclePedIsIn(ped, false);

    SetVehicleEngineHealth(pedVehicle, 1000);
    SetVehicleEngineOn(pedVehicle, true, true, false);
    SetVehicleFixed(pedVehicle);

    //     if(IsVehicleDamaged(pedVehicle)){
    //         SetVehicleDamage(pedVehicle, 0.0, 0.0, 0.33, 0, 100, true )
    //     } else return setImmediate(()=>{
    //         emit('chat:addMessage', {
    //             args: [
    //                 'Your vehicle is not damaged!'
    //             ]
    //         })
    //     })
    console.log("fixed", pedVehicle);
  },
  false
);

RegisterCommand("eng", (source, args) => {
  pedVeh = GetVehiclePedIsIn(PlayerPedId());
  let bool = null;
  if (args[0] === "on") {
    bool = true;
  } else {
    bool = false;
  }
  SetVehicleEngineOn(pedVeh, bool, false, false);
});
