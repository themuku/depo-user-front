export function formatDescription(description = "") {
  if (description.length > 65) {
    return description.slice(0, 65).concat("...");
  } else {
    return description;
  }
}
