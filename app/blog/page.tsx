import { Blog } from "../../components/blog";
import { client } from "../../tina/__generated__/databaseClient";

export default async function Home() {
  const res = await client.queries.blog({ relativePath: "blog.md" });
  return (
    <Blog
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
