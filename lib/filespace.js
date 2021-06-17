module.exports = (filename, modulePath) => {
  if (modulePath) {
    if ((filename || '').startsWith(modulePath)) {
      return filename.substr(modulePath.length + 1);
    }
  }
  return filename;
};
