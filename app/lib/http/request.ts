type RequestParams = {
  method?: string;
  path: string;
  body?: Object;
};

export const request = async ({
  method = "GET",
  path,
  body,
}: RequestParams) => {
  const request = new Request(path, {
    method,
    body: JSON.stringify(body),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  const response = await fetch(request);
  return await response.json();
};
