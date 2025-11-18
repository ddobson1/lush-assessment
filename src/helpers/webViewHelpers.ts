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
    window.ReactNativeWebView.postMessage(
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.scrollHeight
      )
    );
    true;
  `;
};

