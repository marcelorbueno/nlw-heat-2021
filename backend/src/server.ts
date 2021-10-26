import { serverHttp } from './app';

const port = 4000;

serverHttp.listen(port, () =>
  // eslint-disable-next-line no-console
  console.log(`🚀 Server is running on PORT ${port}`),
);
