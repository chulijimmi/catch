import { apiKey, apiDomain } from "../../config/project/project.env";
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  try {
    if (response.status >= 200 && response.status < 300) {
      return parseJSON(response);
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } catch (error) {
    throw error;
  }
}

/**
 * Get options method
 * @param {Object} header
 */
export function requestGetOption(header) {
  let options = {
    method: "GET",
    headers: {
      ...header,
      Authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
  };
  return options;
}

/**
 * Post options method
 * @param {Object} header
 */
export function requestPostOption(header) {
  let options = {
    method: "POST",
    header: {
      ...header,
      Authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
  };
  return options;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default async function request(url, options) {
  try {
    const response = await fetch(`${apiDomain}${url}`, options);
    if (response.status === 200) return await response.json();
    return checkStatus(response);
  } catch (error) {
    throw error;
  }
}
