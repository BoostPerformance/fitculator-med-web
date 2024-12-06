import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';
import { nanoid } from 'nanoid';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
 try {
   const body = await req.json();

   const result = await prisma.$transaction(async (tx) => {
     // User handling
     const existingUser = await tx.users.findFirst({
       where: {
         OR: [
           { email: body.user.email },
           { phone_number: body.user.phone_number }
         ]
       }
     });

     const userInfo = existingUser ? 
       await tx.users.update({
         where: { id: existingUser.id },
         data: {
           name: body.user.name,
           email: body.user.email,
           phone_number: body.user.phone_number,
         },
       }) :
       await tx.users.create({
         data: {
           id: nanoid(),
           email: body.user.email,
           name: body.user.name,
           phone_number: body.user.phone_number,
           gender: body.user.gender,
           birthday: body.user.birthday,
         },
       });

     // Program creation
     const programInfo = await tx.programs.create({
       data: {
         id: nanoid(),
         type: body.programs.type,
         duration_in_months: body.programs.duration_in_months,
       }
     });

     // Program batch handling
     let programBatchInfo = (body.subscriptions.batch_id ?
       await tx.programbatches.findUnique({
         where: { id: String(body.subscriptions.batch_id) }
       }) : null) ?? await tx.programbatches.create({
         data: {
           id: nanoid(),
           program_id: programInfo.id,
           batch_number: body.subscriptions.id || 13,
         }
       });

     // Exercise preferences creation
     const exercisePreferenceInfo = await tx.exercisepreferences.create({
       data: {
         id: nanoid(),
         user_id: userInfo.id,
         exercise_level: body.exercisePreferences.exercise_level,
         exercise_goal: body.exercisePreferences.exercise_goal,
         exercise_performance_level: body.exercisePreferences.exercise_performance_level,
         exercise_concern: body.exercisePreferences.exercise_concern || null,
         referral_source: body.exercisePreferences.referral_source || null,
         ldl_cholesterol: body.exercisePreferences.ldl_cholesterol || null,
         total_cholesterol: body.exercisePreferences.total_cholesterol || null,
       }
     });

     const userSubscriptionInfo = await tx.usersubscriptions.create({
       data: {
         id: nanoid(),
         users: { connect: { id: userInfo.id } },
         programs: { connect: { id: programInfo.id } },
         programbatches: { connect: { id: programBatchInfo.id } },
         start_date: programInfo.start_date || null,
         end_date: programInfo.end_date || null,
       }
     });

     const paymentDate = new Date(body.paymentInfo.payment_date || Date.now());
     const paymentInfo = await tx.paymentinfo.create({
       data: {
         id: nanoid(),
         user_subscription_id: userSubscriptionInfo.id,
         amount: body.paymentInfo.amount,
         payment_date: paymentDate,
         payment_key: body.paymentInfo.payment_key,
         order_id: body.paymentInfo.order_id,
         order_name: body.paymentInfo.order_name || null,
         card_type: body.paymentInfo.card_type || null,
         owner_type: body.paymentInfo.owner_type || null,
         currency: body.paymentInfo.currency || 'KRW',
       }
     });

     return {
       user: userInfo,
       exercisepreferences: exercisePreferenceInfo,
       programs: programInfo,
       usersubscriptions: userSubscriptionInfo,
       paymentinfo: paymentInfo,
     };
   });

   return Response.json(result);

 } catch (error) {
   console.error('Prisma error:', error);
   if (error instanceof Prisma.PrismaClientKnownRequestError) {
     console.error('Error code:', error.code);
     console.error('Meta:', error.meta);
   }
   return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
 }
}