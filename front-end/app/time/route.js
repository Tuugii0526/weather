export const dynamic = "force-static";
export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}