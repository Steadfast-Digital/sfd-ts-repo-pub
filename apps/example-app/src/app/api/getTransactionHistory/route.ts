import { NextResponse } from 'next/server';
import { getTransactionHistory } from '@steadfastdigital/blockchain-factory';

export async function POST(request: Request) {
  const { network, address } = await request.json();

  try {
    const transactions = await getTransactionHistory(network, address);
    return NextResponse.json({ transactions });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
