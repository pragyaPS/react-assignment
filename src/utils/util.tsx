export const isEmpty = (data:any) => {
  if (Array.isArray(data)) {
    return data.length === 0;
  } else if (typeof data === "object") {
    return Object.keys(data).length === 0;
  }
};
