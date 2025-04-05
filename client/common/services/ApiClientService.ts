interface RequestOptions {
  method: string;
  headers: {
    [key: string]: string;
  };
  body?: string;
}

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

const sendRequest = async (
  method: string,
  endpoint: string,
  data: any = null,
  contentType: string | null = null
) => {
  const defaultContentType = 'application/json; charset=UTF-8';
  const requestOptions: RequestOptions = {
    method: method.toUpperCase(),
    headers: {
      'Authorization': `Bearer ${getCookie('access_token')}`,
      'Content-type': contentType ?? defaultContentType,
    },
  };

  if (data) {
    if (data instanceof FormData) {
      delete requestOptions.headers['Content-type'];
    }
    requestOptions.body = data;
  }
  // console.log(document.cookie)
  try {
    const response = await fetch('https://fresco.md/api' + endpoint, method === 'GET' ? {
      headers: {
      // 'Authorization': `Bearer ${getCookie('access_token')}`,
    },
    } : requestOptions);

    if (response.type == 'cors' && response.redirected) {
      window.location.href = response.url;
    }

    return response;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

const apiClientService = {
  get: (endpoint: string) => sendRequest('GET', endpoint),
  post: (endpoint: string, data: any, contentType: string | null = null) =>
    sendRequest('POST', endpoint, data, contentType),
  put: (endpoint: string, data: any, contentType: string | null = null) =>
    sendRequest('PUT', endpoint, data, contentType),
  delete: (endpoint: string) => sendRequest('DELETE', endpoint),
};

export default apiClientService;
