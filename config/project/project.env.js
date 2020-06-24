// I think about this environment
// Its better save the domain, api key, etc, related this project to node (cloud) environment
const apiDomain =
  process.env.NODE_ENV === "development"
    ? "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/"
    : "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/";

const apiKey = "";
export { apiDomain, apiKey };
