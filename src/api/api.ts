import { AppState } from "../state/AppStateReducer"

export const load = async () => {
  const result = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/load`);

  if (result.ok) {
    return result.json() as Promise<AppState>;
  }

  throw new Error("Error while loading the state.");
}

export const save = async (payload: AppState) => {
  const result = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (result.ok) {
    result.json();
  }

  throw new Error("Error while saving the state.");
}