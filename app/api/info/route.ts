
import site_info from '@/app/api/db'

export async function GET(){
    return Response.json(site_info);
}

export async function POST(request:Request){
    const info =await request.json();
    info.push(site_info);

    return Response.json(info);
}