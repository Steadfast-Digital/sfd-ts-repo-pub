import { NextResponse } from 'next/server';
import { getBalance } from '@steadfastdigital/blockchain-factory';

// eslint-disable-next-line @typescript-eslint/naming-convention
export async function POST(request: Request) {
  const { network, address } = await request.json();

  try {
    const balance = await getBalance(network, address);
    return NextResponse.json({ balance });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
