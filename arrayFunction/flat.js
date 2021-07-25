Array.prototype.flatten = function(depth = 1) {
  return this.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) && depth > 1 ? item.flatten(depth - 1) : item)
  }, [])
}