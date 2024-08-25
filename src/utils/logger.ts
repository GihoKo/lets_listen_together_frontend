interface LoggerProps {
  error: Error;
  context?: string;
}

const logger = ({ error, context = 'Application Error' }: LoggerProps) => {
  const timestamp = new Date().toISOString();

  const errorStyle = `
      background: #f44336;
      color: white;
      font-weight: bold;
      padding: 4px 8px;
      border-radius: 4px;
    `;

  const contextStyle = `
      background: #ff9800;
      color: black;
      font-weight: bold;
      padding: 4px 8px;
      border-radius: 4px;
      margin-left: 10px;
    `;

  const timestampStyle = `
      color: grey;
      font-weight: normal;
      margin-left: 10px;
    `;

  const messageStyle = `
      color: black;
      font-weight: bold;
      padding: 2px 0;
    `;

  const stackStyle = `
      color: black;
      font-weight: bold;
      padding: 2px 0;
    `;

  // 콘솔에 에러 메시지를 출력
  console.group('%cERROR%c%s%c%s', errorStyle, contextStyle, context, timestampStyle, timestamp);
  console.log('%cMessage:', messageStyle);
  console.log(error.message || 'No message provided');
  console.log('%cStack:', stackStyle);
  console.log(error.stack || 'No stack trace available');
  console.groupEnd();
};

export default logger;
