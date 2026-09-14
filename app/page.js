import { redirect } from "next/navigation";

// The finished storefront pages live as static HTML under /public.
// Landing on "/" sends you to the homepage. Replace this with a real
// app-router page once you begin porting components (see README.md).
export default function Home() {
  redirect("/Homepage.html");
}
