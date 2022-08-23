type RequestParams = {
  method?: string;
  path: string;
  body?: Object;
  headers: Headers;
};

export const request = async ({
  method = "GET",
  path,
  body,
  headers = new Headers({ "Content-Type": "application/json" }),
}: RequestParams) => {
  const request = new Request(path, {
    method,
    body: JSON.stringify(body),
    headers,
  });
  const response = await fetch(request);
  return await response.json();
};
