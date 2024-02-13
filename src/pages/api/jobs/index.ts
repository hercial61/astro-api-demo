import { getXataClient } from "../../../xata";

const client = getXataClient();

export async function GET() {

  try {
    const jobs = await client.db.job.getAll()
    return new Response(
      JSON.stringify(jobs), {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    
  } catch (error) {}
  
}