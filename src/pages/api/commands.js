import { commands } from "../../assets/commands";

export default function handler(req, res) {
  res.status(200).json({ commands });
}
