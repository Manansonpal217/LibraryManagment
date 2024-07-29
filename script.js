function getEmailFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams.get("email");
}

// Example usage:
const email = getEmailFromUrl();
