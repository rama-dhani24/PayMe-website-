import { NextResponse } from "next/server";
import { validateContact } from "@/lib/contact-schema";
export async function POST(request:Request){try{const json=await request.json();const result=validateContact(json);if(!result.success)return NextResponse.json({error:"Please check the form fields.",issues:result.issues},{status:400});console.info("PayMe marketing demo request received",{...result.data,receivedAt:new Date().toISOString()});return NextResponse.json({ok:true},{status:202});}catch{return NextResponse.json({error:"Invalid request."},{status:400});}}
