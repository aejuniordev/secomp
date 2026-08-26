import "dotenv/config";
import FtpDeploy from "ftp-deploy";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/dist",   // "dist" se for Vite
  remoteRoot: "/web/",       // ajuste pro caminho do seu servidor
  include: ["*", "**/*"],
  deleteRemote: false,               // true = limpa o remoto antes de subir
  forcePasv: true,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("Deploy finalizado:", res))
  .catch((err) => console.error("Erro no deploy:", err));
