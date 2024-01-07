import { IconType } from "react-icons/lib";
import { FaUserFriends } from "react-icons/fa";

export type VisibilityListenerType = 'local player count';

type LocalPlayerCountParams = { playerCount: number, includeSteamdeck: boolean }

export type VisibilityListenerParams<T extends VisibilityListenerType> =
  T extends 'local player count' ? LocalPlayerCountParams :
  never;

/**
 * Dictionary of default VisibilityListener params.
 */
export const VisibilityListenerParamsDefaults: { [key in VisibilityListenerType]: VisibilityListenerParams<key> } = {
  "local player count": { playerCount: 2, includeSteamdeck: false }
}

/**
 * Dictionary of descriptions for each VisibilityListener.
 */
export const VisibilityListenerDescriptions: { [visbilityListenerType in VisibilityListenerType]: string } = {
  "local player count": "Change tab visibility based on the number of local players."
}

/**
 * Dictionary of icons for each VisibilityListener.
 */
export const VisibilityListenerIcons: { [visbilityListenerType in VisibilityListenerType]: IconType } = {
  "local player count": FaUserFriends,
}
