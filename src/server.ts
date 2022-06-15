import { serverHttp } from "./app";
const port = 4000

serverHttp.listen(port, () => console.log(`\nHTTP Server running on port http://localhost:${port}/`))
