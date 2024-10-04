import Cors from "cors";

const cors = Cors({
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: ["http://localhost:3000", "https://your-frontend-domain.com"],
});

function runCors(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default runCors;
