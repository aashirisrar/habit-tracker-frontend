// state/atoms.js
import { atom } from "jotai";
import axios from "axios";

// Atom to hold the list of activities
export const activitiesAtom = atom([]);

// Atom to hold the loading state
export const loadingAtom = atom(true);

// Atom to hold the error state
export const errorAtom = atom("");

// Atom to fetch activities and update the relevant atoms
export const fetchActivitiesAtom = atom(null, async (get, set) => {
  set(loadingAtom, true);
  set(errorAtom, "");
  try {
    const response = await axios.post("/api/activity/get-user-activity");
    set(activitiesAtom, response.data.habits);
  } catch (error) {
    set(errorAtom, "Failed to fetch activities");
  } finally {
    set(loadingAtom, false);
  }
});
