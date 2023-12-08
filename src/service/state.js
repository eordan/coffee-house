let globalState = {
  page: 'main',
};

export function getState() {
  return globalState;
}

export function changeState(newState) {
  globalState = { ...globalState, ...newState };
}
