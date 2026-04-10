const BASE_URL = 'http://localhost:5150';

async function request<T>(path: string, options: RequestInit = {}, fetchFn = fetch): Promise<T> {
    const res = await fetchFn(`${BASE_URL}${path}`, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || `HTTP ${res.status}`);
    }

    const text = await res.text();
    return text ? JSON.parse(text) : null;
}

export function createClient(fetchFn = fetch) {
    return {
        get: <T>(path: string) => request<T>(path, {}, fetchFn),
        post: <T>(path: string, body: unknown) => request<T>(path, { method: 'POST', body: JSON.stringify(body) }, fetchFn),
        put: <T>(path: string, body: unknown) => request<T>(path, { method: 'PUT', body: JSON.stringify(body) }, fetchFn),
        patch: <T>(path: string, body: unknown) => request<T>(path, { method: 'PATCH', body: JSON.stringify(body) }, fetchFn),
        delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }, fetchFn),
    };
}

// default client for use in components (browser only)
export const client = createClient();