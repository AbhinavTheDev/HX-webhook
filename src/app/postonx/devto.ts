export const postonDevTo = async (title: string, markdown: string, url: string) => {
    try {
        const apiKey = process.env.DevTo_API_Key;
        if (!apiKey) {
            throw new Error('DevTo API key is not defined');
        }
        const response = await fetch('https://dev.to/api/articles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': apiKey,
            },
            body: JSON.stringify({
              article: {
                title: `${title}`,
                published: true,
                body_markdown: `${markdown}`,
                canonical_url: `${url}`,
              },
            }),
          })
          const res = await response.json();
          return {postLog: JSON.stringify(res)};
    } catch (error) {
        console.error('Failed to post on DevTo:', error);
        return { errorLog: 'Failed to post on DevTo. Please check the logs for more details.' };
    }
}