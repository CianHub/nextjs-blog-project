import Document, { Html, Head, Main, NextScript } from 'next/Document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;