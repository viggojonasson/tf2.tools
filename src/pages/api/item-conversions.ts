// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stringify, parseSKU, parseString } from "tf2-item-format/static";
import { toSKU } from "tf2-item-format";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error?: string;
  result?: string[];
  conversion?: {
    received: number;
    successed: number;
    failed: number;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(404);
  }

  try {
    req.body = JSON.parse(req.body);
  } catch (err) {
    return res.status(400).json({
      error: "Invalid JSON",
    });
  }

  if (!req.body.input || !req.body.splitChar) {
    return res.status(400).json({
      error: "No input or no split character provided!",
    });
  }

  const splitChar = req.body.splitChar.toString() as string;
  const input = req.body.input.toString() as string;

  const items = input.split(splitChar).map((i) => i.trim());

  if (items.length === 0) {
    return res.status(400).json({
      error: "No input!",
    });
  }

  const converted = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].indexOf(";") === -1) {
      // Item name
      try {
        const attributes = parseString(items[i], true, true);
        const sku = toSKU(attributes);

        if (sku && !sku.startsWith("undefined")) {
          converted.push(sku);
        }
      } catch (err) {}
    } else {
      // SKU
      try {
        const attributes = parseSKU(items[i]);
        const name = stringify(attributes);

        converted.push(name);
      } catch (err) {}
    }
  }

  res.status(200).json({
    result: converted,
    conversion: {
      received: items.length,
      successed: converted.length,
      failed: items.length - converted.length,
    },
  });
}
