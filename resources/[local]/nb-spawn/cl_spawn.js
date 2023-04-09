const Delay = (ms) => new Promise(res => setTimeout(res, ms))

const spawnPos = [326.2112731933594, -1615.0489501953125, 94.49041748046875];
const spawnHeading = 34.23450088501
const rotation = [-0.002789021, 0.002857814, 22.4899]

console.log('started')

on("onClientGameTypeStart", () => {
  exports.spawnmanager.setAutoSpawnCallback(() => {
    exports.spawnmanager.spawnPlayer(
      {
        x: 324.568,
        y: -1626.314,
        z: 92.701
      }
    )

    emit('spawn:in')
    // const cam = CreateCam('DEFAULT_SCRIPTED_CAMERA', true)
    // const ped = PlayerPedId()
    // print(cam)
    // SetCamActive(cam,  true)
    // RenderScriptCams(true,  true,  0,  false,  false)
    // SetCamCoord(cam, 326.2112731933594, -1615.0489501953125, 94.49041748046875)
    // SetCamRot(cam,-0.002789021, 0.002857814, 22.4899)
    // FreezeEntityPosition(ped, true)
    // SetEntityVisible(ped, false)
    // SetPlayerInvincible(ped, true)
    
    // Delay(4000)
    // emit('spawn:spawned')
  });

  exports.spawnmanager.setAutoSpawn(true);


console.log(`spawned at ${spawnPos}`);

});

RegisterCommand('spawn', async () => {
    cam = CreateCam('DEFAULT_SCRIPTED_CAMERA', true)
    const ped = PlayerPedId()
    console.log(cam)
    SetCamActive(cam,  true)
    RenderScriptCams(true,  true,  0,  false,  false)
    SetCamCoord(cam, 326.2112731933594, -1615.0489501953125, 94.49041748046875)
    SetCamRot(cam,-0.002789021, 0.002857814, 22.4899)
    SetEntityCoords(ped, 324.568, -1626.314, 92.701, true, true, false, false)
    FreezeEntityPosition(ped, true)
    SetEntityVisible(ped, false)
    
    await Delay(100)
    emit('spawn:spawned')
    
}, false)

on('spawn:teleported', () => {
  const ped = PlayerPedId()
  SetCamActive(cam, false)
  RenderScriptCams(0, false, 0, false, false)
  FreezeEntityPosition(ped, false)
  SetEntityVisible(ped, true)
  SetPlayerInvincible(ped, false)
  setImmediate(()=>{
    DoScreenFadeIn(1000)
  })
})

on('spawn:in', async () => {
  cam = CreateCam('DEFAULT_SCRIPTED_CAMERA', true)
  const ped = PlayerPedId()
  console.log(cam)
  SetCamActive(cam,  true)
  RenderScriptCams(true,  true,  0,  false,  false)
  SetCamCoord(cam, 326.2112731933594, -1615.0489501953125, 94.49041748046875)
  SetCamRot(cam,-0.002789021, 0.002857814, 22.4899)
  SetEntityCoords(ped, 324.568, -1626.314, 92.701, true, true, false, false)
  FreezeEntityPosition(ped, true)
  SetEntityVisible(ped, false)
  
  await Delay(1000)
  emit('spawn:spawned')
  
})

RegisterCommand('respawn', () => {
  const playerCoords = GetEntityCoords(PlayerPedId())
  NetworkResurrectLocalPlayer(playerCoords[0], playerCoords[1], playerCoords[2], 0, true, true)
  ClearPedBloodDamage(PlayerPedId())
})

