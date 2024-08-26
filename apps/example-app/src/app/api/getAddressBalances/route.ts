import { NextResponse } from 'next/server';
import { getAllBalances } from '@steadfastdigital/blockchain-factory';

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function POST(request: Request) {
  const { network, address } = await request.json();

  try {
    const balances = await getAllBalances(network, address);
    return NextResponse.json({ balances });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
