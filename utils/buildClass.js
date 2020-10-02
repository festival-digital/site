export default (classObject) => {
  const keys = Object.keys(classObject);
  const classes = keys
    .map((key) => (classObject[key] ? key : false))
    .filter((item) => item !== false);
  return classes.join(` `).trim();
};
