import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_DATA_SET

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2022-03-25",
  useCdn: false
});
