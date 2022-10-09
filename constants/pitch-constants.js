export const PitchConstants = {
  LowE:81,
  A:110,
  D:146,
  G:195,
  B:246,
  HighE:330,
  RotationAngleLowE:-57.89,
  RotationAngleA:-32.1,
  RotationAngleD:-7.1,
  RotationAngleG:14.1,
  RotationAngleB:37.1,
  RotationAngleHighE:60.89

}

export function CheckIfPerfectLowE(currentPitch) {
  return currentPitch === PitchConstants.LowE -1 || currentPitch === PitchConstants.LowE || currentPitch === PitchConstants.LowE + 1
}

export function CheckIfPerfectA(currentPitch){
  return currentPitch === PitchConstants.A || currentPitch === PitchConstants.A + 1 || currentPitch === PitchConstants.A - 1
}

export function CheckIfPerfectD(currentPitch){
  return currentPitch === PitchConstants.D -1 || currentPitch === PitchConstants.D || currentPitch === PitchConstants.D + 1
}

export function CheckIfPerfectG(currentPitch){
  return currentPitch === PitchConstants.G || currentPitch === PitchConstants.G + 1 || currentPitch === PitchConstants - 1
}

export function CheckIfPerfectB(currentPitch){
  return currentPitch === PitchConstants.B || currentPitch === PitchConstants.B - 1 || currentPitch === PitchConstants.B + 1
}

export function CheckIfPerfectHighE(currentPitch){
  return currentPitch === PitchConstants.HighE || currentPitch === PitchConstants.HighE - 1 || currentPitch === PitchConstants.HighE - 1

}
