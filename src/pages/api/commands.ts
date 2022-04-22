import type { NextApiHandler } from "next";
import { commands } from "../../assets/commands";

const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ commands });
};

export default handler;
