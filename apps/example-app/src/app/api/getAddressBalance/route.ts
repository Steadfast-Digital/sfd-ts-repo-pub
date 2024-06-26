import { NextResponse } from 'next/server';
import { getAddressBalance } from '@steadfastdigital/blockchain-factory';

export async function POST(request: Request) {
  const { network, address } = await request.json();

  try {
    const balance = await getAddressBalance(network, address);
    return NextResponse.json({ balance });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
