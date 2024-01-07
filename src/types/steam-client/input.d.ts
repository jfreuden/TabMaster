// Types for SteamClient.Input

type Input = {
  /**
   * Registers a callback for changes in the list of active controllers.
   * @param callback The callback to run when controller list changes.
   * @returns A function to call to unregister the callback.
   */
  RegisterForControllerListChanges(callback: (controllerListChanges: ControllerInfo[]) => void): Unregisterer;
}

enum ControllerType {
  None = -1,
  Unknown = 0,
  UnknownSteamController = 1,
  SteamController = 2, // Codename Gordon
  SteamControllerV2 = 3, // Codename Headcrab
  SteamControllerNeptune = 4, // Steam Deck
  FrontPanelBoard = 20,
  Generic = 30,
  XBox360Controller = 31,
  XBoxOneController = 32,
  PS3Controller = 33,
  PS4Controller = 34,
  WiiController = 35,
  AppleController = 36,
  AndroidController = 37,
  SwitchProController = 38,
  SwitchJoyConLeft = 39,
  SwitchJoyConRight = 40,
  SwitchJoyConPair = 41,
  SwitchProGenericInputOnlyController = 42,
  MobileTouch = 43,
  SwitchProXInputSwitchController = 44,
  PS5Controller = 45,
  XboxEliteController = 46,
  LastController = 47, // Unverified
  PS5EdgeController = 48,
  GenericKeyboard = 400,
  GenericMouse = 800,
}

interface ControllerInfo {
  strName: string;
  eControllerType: ControllerType;
  nXInputIndex: number;
  nControllerIndex: number;
  eRumblePreference: number; // ControllerRumbleSetting
  bWireless: boolean;
  unUniqueID: number;
  unVendorID: number;
  unProductID: number;
  unCapabilities: number;
  strFirmwareBuildTime: string;
  strSerialNumber: string;
  strChipID: string;
  nLEDColorR: number;
  nLEDColorG: number;
  nLEDColorB: number;
  flLEDBrightness: number;
  flLEDSaturation: number;
  nTurnOnSound: number;
  nTurnOffSound: number;
  nLStickDeadzone: number;
  nRStickDeadzone: number;
  nLHapticStrength: number;
  nRHapticStrength: number;
  flLPadPressureCurve: number;
  flRPadPressureCurve: number;
  bHaptics: boolean;
  bSWAntiDrift: boolean;
  flGyroStationaryTolerance: number;
  flAccelerometerStationaryTolerance: number;
  bRemoteDevice: boolean;
  bNintendoLayout: boolean;
  bUseReversedLayout: boolean;
  ActiveAccount: ActiveAccount | undefined;
  vecAltAccounts: any[]; // The type for this property might need to be more specific based on the actual data structure
}
