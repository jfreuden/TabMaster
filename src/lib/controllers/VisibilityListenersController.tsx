import { TabMasterManager } from "../../state/TabMasterManager";
import { SteamController } from "./SteamController";


export class VisibilityListenersController {
  private tabMasterManager: TabMasterManager;
  private steamController: SteamController;

  // The number of connected controllers, including the SteamDeck itself.
  private numberOfControllers = 1;
  private controllerListSub!: Unregisterer;

  /**
   * Creates a new VisibilityListenersController.
   * @param tabMasterManager The plugin's state manager.
   * @param steamController The plugin's SteamController.
   */
  constructor(tabMasterManager: TabMasterManager, steamController: SteamController) {
    this.tabMasterManager = tabMasterManager;
    this.steamController = steamController;

    this.initializeListeners();
  }

  private initializeListeners() {
    // * Initialize player count listener.
    this.controllerListSub = this.registerForLocalPlayerCountChanges(this.controllerListCallback);


    // TODO: other listeners here.
  }

  private controllerListCallback(previousNumPlayers: number, currentNumPlayers: number): void {
    // * check if deck should be included, if so, decrease both by one
    // ! TabGroups should take priority. If the group is set to override visibility changes, only update tabs in that group, otherwise, check all.

    // * check visible tab group
    const visibleTabGroup = null; // hard coded value for default, will change once there is a way to get this info
    const tabs = this.tabMasterManager.getTabs();
    let tabsToCheck = [...tabs.visibleTabsList, ...tabs.hiddenTabsList];

    if (visibleTabGroup.overrideVisibilityChanges) {
      // TODO: set tabs to check to be the tabs in the tabGroup.
    }
    
    // * loop over tabs.
    for (const tab of tabsToCheck) {
      // TODO: tabs now need a property for visibility listeners
    }
  }
  
  /**
   * Registers a callback for local player count changes.
   * @param callback The callback to run when controllers change.
   * @returns A function to call to unregister the callback.
   */
  private registerForLocalPlayerCountChanges(callback: (previousNumPlayers: number, currentNumPlayers: number) => void): Unregisterer {
    return this.steamController.registerForControllerListChanges((controllers: ControllerInfo[]) => {
      if (controllers.length !== this.numberOfControllers) {
        const previousNumPlayers = this.numberOfControllers;
        this.numberOfControllers = controllers.length;
        
        callback(previousNumPlayers, this.numberOfControllers);
      }
    });
  }

  /**
   * Function to run when cleaning up the plugin.
   */
  destroy(): void {
    if (this.controllerListSub) this.controllerListSub.unregister();
  }
}
