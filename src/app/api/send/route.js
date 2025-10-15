import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('❌ BOT_TOKEN or CHAT_ID not found in env');
      return NextResponse.json(
        { error: 'BOT_TOKEN and CHAT_ID must be set in environment variables' },
        { status: 500 }
      );
    }

    const text = `
<b>📩 Нова заявка з сайту TrustCall</b>\n
👤 <b>Ім’я:</b> ${name}\n
📞 <b>Телефон:</b> ${phone}\n
💬 <b>Повідомлення:</b> ${message || '—'}
`;

    const telegramRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'HTML',
      }),
    });

    if (!telegramRes.ok) {
      const errorText = await telegramRes.text();
      console.error('Telegram API error:', errorText);
      throw new Error(errorText);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('❌ Error in /api/send:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
