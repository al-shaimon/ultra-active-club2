const saveToStorage = (id) => {
  localStorage.setItem("breaktime", id);
};

const getStorage = () => {
  const newValue = localStorage.getItem("breaktime");
  return newValue;
};

export { saveToStorage, getStorage };
