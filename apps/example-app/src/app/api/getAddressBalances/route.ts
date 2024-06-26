import { NextResponse } from 'next/server';
import { getAddressBalances } from '@steadfastdigital/blockchain-factory';

export async function POST(request: Request) {
  const { network, address } = await request.json();

  try {
    const balances = await getAddressBalances(network, address);
    return NextResponse.json({ balances });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
