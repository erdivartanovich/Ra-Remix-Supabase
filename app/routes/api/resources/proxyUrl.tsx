const API_PREFIX = "/api/resources";
const proxyUrl = (url: string) => {
  const startOfRequest = url.indexOf(API_PREFIX);
  const query = url.substring(startOfRequest + API_PREFIX.length);
  if (query === "/") return;
  return `${process.env.SUPABASE_URL}/rest/v1${query}`;
};

export default proxyUrl;
