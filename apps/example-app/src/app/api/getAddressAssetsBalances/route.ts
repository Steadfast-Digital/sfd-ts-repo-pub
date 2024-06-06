import { NextResponse } from 'next/server';
import { getAddressAssetsBalances } from '@steadfastdigital/blockchain-factory';

export async function POST(request: Request) {
  const { network, address } = await request.json();

  try {
    const balances = await getAddressAssetsBalances(network, address, []);
    return NextResponse.json({ balances });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
