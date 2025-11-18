export const generateHtmlContent = (content: string): string => {
  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            padding: 0;
            line-height: 28px;
            font-family: sans-serif;
          }
        </style>
      </head>
      <body>${content}</body>
    </html>
  `;
};

export const getHeightMeasurementScript = (): string => {
  return `
    window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'height', value: document.body.scrollHeight }));
    
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link?.href) {
        e.preventDefault();
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'link', url: link.href }));
      }
    });
    true;
  `;
};

