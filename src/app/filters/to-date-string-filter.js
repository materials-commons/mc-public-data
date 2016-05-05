export function toDateStringFilter() {
  return function(input) {
    if (input) {
      var t = input.epoch_time;
      return new Date(t * 1000).toDateString();
    }
    return "";
  };
}
